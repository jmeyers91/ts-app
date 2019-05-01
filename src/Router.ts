import KoaRouter from 'koa-router';
import App from './App';

interface CustomContext {
  core: App;
}

interface CustomState {}

export default class AppRouter extends KoaRouter<CustomState, CustomContext> {}
