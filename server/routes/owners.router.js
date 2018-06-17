const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('In owner-router GET to read');
  
    const queryText = `SELECT owners.id, owners.first_name, owners.last_name FROM owners`;
    pool.query(queryText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log('Error getting all owners: ', err);
        res.sendStatus(500);
      })
  });

  // const queryText = `SELECT owners.id, count(pets.id) as pets, owners.first_name, owners.last_name FROM pet_owners
  // JOIN pets on pet_owners.pet_id = pets.id
  //   JOIN owners ON pet_owners.owner_id = owners.id
  //   GROUP BY owners.id;`;

  router.delete('/:id', (req, res) => {
    const newData = req.params;
    console.log('In owners-router DELETE to delete', newData);
    const queryText = 'DELETE FROM owners WHERE id=$1';
    pool.query(queryText, [newData.id])
      .then((results)=>{
        console.log('Successful delete of owner', results);
        res.sendStatus(200);
      }).catch((error)=>{
        console.log('Error deleting owner', error);
        res.sendStatus(500);
      })
  });

  router.post('/', function (req,res){
    console.log('POST /owners');
    const queryText = `INSERT INTO owners ("first_name", "last_name") 
    VALUES ($1, $2);`
    pool.query(queryText, [req.body.first_name, req.body.last_name])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error adding owner', error);
        res.sendStatus(500);
    })
});
  
module.exports = router;