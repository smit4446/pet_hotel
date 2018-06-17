const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('In pets-router GET to read');
  
    const queryText = `SELECT pets.id, pets.name, pets.breed, pets.color, pets.is_checked_in, owners.first_name, owners.last_name FROM pet_owners
    JOIN pets on pet_owners.pet_id = pets.id
      JOIN owners ON pet_owners.owner_id = owners.id
      GROUP BY owners.id, pets.id;`;
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
    const queryText = `INSERT INTO pets ("name", "breed", "color", "is_checked_in") 
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [req.body.name, req.body.breed, req.body.color, req.body.is_checked_in])
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
    const queryText = 'DELETE FROM pets WHERE id=$1';
    pool.query(queryText, [newData.id])
      .then((results)=>{
        console.log('Successful delete of pet', results);
        res.sendStatus(200);
      }).catch((error)=>{
        console.log('Error deleting pet', error);
        res.sendStatus(500);
      })
  });

module.exports = router;