import KoaRouter from 'koa-router';
import App from './App';

interface CustomContext {
  arp: App;
}

interface CustomState {}

export default class AppRouter extends KoaRouter<CustomState, CustomContext> {}
