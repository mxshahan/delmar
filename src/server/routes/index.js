import userRoute from './user'

export default (app) => {
  app.use('/user', userRoute);
}