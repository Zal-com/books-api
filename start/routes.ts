/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.group(() => {
  router
    .group(() => {
      router.get('', [UsersController, 'index'])
      router.get(':id', [UsersController, 'get'])
  }).prefix('user')
})
