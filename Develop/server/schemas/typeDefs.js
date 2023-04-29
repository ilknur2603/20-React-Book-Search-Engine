//Describe variables
const{gql}=require ("apollo-server=express")

//following tasks in the README.FILE, creating Query, InputBook, Mutation, User, Book, Auth  with types
const typeDefs =`
    type Query{
        me:User
    }
    input InputBook{
          bookId:String
          authors:[String]
          title:String
          image:String
          description:String
          link:String
    }
    #
    type Mutation{
        login(email:String!, password:String!):Auth
        addUser(username:String!, email:String!, password:String!):Auth
        savaBook(newBook:InputBook):User
        removeBook(bookId:ID!):User
    }
     type User{
        _id:ID!
        username:String!
        email:String
        bookCount:Integer
        savedBooks:[Book]
     }
     type Book{
        bookId:String
          authors:[String]
          title:String
          image:String
          description:String
          link:String
     }
    type Auth {
        token:ID!
        user :User
    }



`

module.exports= typeDefs;