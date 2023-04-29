//Require Authentication Error from apollo-server-express for finding errors !
const {AuthenticationError} = require ("apollo-server-express");
const {User} = require ("../models");


const resolvers = {
    Query:{
        me : async (parent, args, context )=>{

        }
    }
}