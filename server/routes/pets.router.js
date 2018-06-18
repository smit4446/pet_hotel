const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('In pets-router GET to read');
  
    const queryText = `SELECT pets.id, pets.image_path, pets.owner_id, pets.name, pets.breed, pets.color, pets.is_checked_in, owners.first_name, owners.last_name FROM pets
    LEFT JOIN owners ON  pets.owner_id = owners.id
    GROUP BY pets.id, owners.first_name, owners.last_name;`;
    pool.query(queryText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('Error getting all pets: ', err);
        res.sendStatus(500);
      })
  });

  router.post('/', function (req,res){
    console.log('POST /pets', req.body);
    const queryText = `INSERT INTO pets ("image_path", "name", "owner_id", "breed", "color", "is_checked_in") 
    VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [req.body.image_path, req.body.name, req.body.owner_id, req.body.breed, req.body.color, req.body.is_checked_in])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error adding pet', error);
        res.sendStatus(500);
    })
});

  router.delete('/:id', (req, res) => {
    const newData = req.params;
    console.log('In pets-router DELETE to delete', newData);
    const queryText = 'DELETE FROM pets WHERE id=$1;';
    pool.query(queryText, [newData.id])
      .then((results)=>{
        console.log('Successful delete of pet', results);
        res.sendStatus(200);
      }).catch((error)=>{
        console.log('Error deleting pet', error);
        res.sendStatus(500);
      })
  });

  router.put('/', (req,res) => {
    console.log('In pets-router PUT to update');
    const queryText = 'UPDATE pets SET is_checked_in = $1 WHERE id=$2;';
    pool.query(queryText, [req.body.is_checked_in, req.body.id])
      .then((results)=>{
        res.sendStatus(200);
      }).catch((error)=>{
        console.log('Error updating pet', error);
        res.sendStatus(500);      
      })
  });

module.exports = router;