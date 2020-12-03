const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;

// const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const mealRoutes = require('./mealRoutes');
// const workoutRoutes = require('./workoutRoutes');
// router.use('/users', userRoutes);
// router.use('/meals', mealRoutes);
// router.use('/workouts', workoutRoutes);

// module.exports = router; (edited) 