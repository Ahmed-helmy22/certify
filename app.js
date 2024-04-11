
import express from 'express';
// import rateLimit  from 'express-rate-limit';
import helmet  from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import xss  from 'xss-clean';
import hpp  from 'hpp';
import errorController from './src/utils/errorController.js';
import providerRouter from './src/modules/provider/providerRouter.js';
import badgeRouter from './src/modules/badgeModule/badgeRouter.js';
import examinerRouter from './src/modules/examiner/examinerRouter.js';
import candidateRouter from './src/modules/candidateModule/candidateRouter.js';
import AppErr from './src/utils/AppErr.js';
import adminRouter from './src/modules/adminModule/adminRouter.js';
import authRouter from './src/modules/authModule/authRouter.js';

const app = express();

// set security http Headers
app.use(helmet());

app.use(express.json({ limit: '10kb' })); // limit the amount of req data

// Data sanitization against no sql injection,,mongoSanitize() returns a middleware function
app.use(mongoSanitize());
// Data sanitization against xss,, xss() returns a middleware function,,,' cross side scripting attack '
app.use(xss()); // maltious html and js code
// prevent prameter pollution >> duplicate query string parameter ,,hpp >> http parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsAverage',
      'ratingsQuantity',
      'difficulty',
      'maxGroupSize',
      'price',
    ],
  })
);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});

// app.use('/api/v1/provider',providerRouter);

app.use('/api/v1/provider',providerRouter);
app.use('/api/v1/badge',badgeRouter);
app.use('/api/v1/examiner',examinerRouter);
app.use('/api/v1/candidate',candidateRouter);
app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/auth',authRouter);



app.all('*', (req, res, next) => {
  next(new AppErr(`cannot find this ${req.originalUrl} on the server`, 404));
});
app.use(errorController);

export default app;
