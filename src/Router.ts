import KoaRouter from 'koa-router';
import { CustomContext } from './App';

/**
 * Koa router
 * See: https://github.com/ZijianHe/koa-router
 */
export default class AppRouter extends KoaRouter<{}, CustomContext> {}
