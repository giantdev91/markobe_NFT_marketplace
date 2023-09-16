import {schemaComposer} from 'graphql-compose';
const AuthTC = schemaComposer.createObjectTC({
  name: 'W3Auth',
  fields: {signature: 'String'},
});
const AuthITC = AuthTC.getInputTypeComposer();
AuthTC.addResolver({
  kind: 'mutation',
  name: 'SignW3',
  args: {
    data: AuthITC,
  },
  type: AuthTC,
  resolve: async ({args: {data}, context}) => {
    console.log('Works');
    return {signature: 'works'};
  },
});
export default AuthTC;
