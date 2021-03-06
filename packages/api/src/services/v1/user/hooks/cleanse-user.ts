import { HookContext } from '@feathersjs/feathers';
import { IUser } from '@valure/core';
import v4 from 'uuid/v4';

const cleanse = () => async (context: HookContext) => {
  const user: IUser = context.data;

  user.verified = false;
  user.verifyKey = v4();

  context.data = user;

  return context;
};

export { cleanse };
