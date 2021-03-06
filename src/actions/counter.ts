import { createAction, createAsyncAction } from "typesafe-actions";

import { RootThunk } from "@src/types";

export const increment = createAction(
  "INCREMENT",
  resolve => (value: number = 1) => resolve({ value })
);

export const decrement = createAction(
  "DECREMENT",
  resolve => (value: number = 1) => resolve({ value })
);

// This is an async action that does *not* return a Promise
// ie. this action is not chainable.
// Use RootThunk for these types of actions.
export const incrementAsync = (
  value: number = 1,
  delay: number = 1000
): RootThunk => dispatch => {
  setTimeout(() => dispatch(increment(value)), delay);
};

/**
 * This uses the `createAsyncAction` helper for demonstrating a typical network request.
 * The three types at the bottom are `<string, number, string>`: are the types for the
 * action creators `incrementAsyncNetwork.request`, `incrementAsyncNetwork.success`
 * and `incrementAsyncNetwork.failure`.
 *
 * ### Usage
 *
 * 1. Dispatch a request action. This is typically used by the reducer to set a loading flag
 *    or any preprocessing
 * ```
 * dispatch(incrementAsyncNetwork.request(url));
 * ```
 *
 * 2. Do your async stuff in your container and dispatch actions for the reducer to handle.
 *
 * ```
 * fetch(url)
 *  .then(res => dispatch(incrementAsyncNetwork.success(res.status)))
 *  .catch(res => dispatch(incrementAsyncNetwork.failure(res.toString())))
 * ```
 *
 * See `containers/Counter.ts` for usage.
 */
export const incrementAsyncNetwork = createAsyncAction(
  "FETCH_ASYNC_REQUEST",
  "FETCH_ASYNC_SUCCESS",
  "FETCH_ASYNC_FAILURE"
)<string, number, string>();
