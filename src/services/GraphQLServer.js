const { ApolloServer, gql } = require('apollo-server');
const { loadSchema } = require('@graphql-tools/load');
const typeDefs = await loadSchema('../graphql/*.graphql', {
    loaders: [new GraphQLFileLoader()]
});

const usersArray = [
    {
        id: 1,
        email: "user@example.org"
        username: "First User"
        password: "test"
    }
];
const beersArray = [
    {
        name: "Tuborg"
        year: "1873-03-15"
        type: "bottom-fermented lager"
        brewery: "Tuborg"
    },
    {
        name: "Bluborg"
        year: "2010-10-01"
        type: "bluetooth fermented lager"
        brewery: "The Borg"
    },
    {
        name: "Borkborg"
        year: "1999-11-09"
        type: "Swedish lager"
        brewery: "Bork DE BORK BORK"
    },
    {
        name: "Heisenberg Pilsner"
        year: "2016-01-13"
        type: "Pilsner"
        brewery: "Bron Yr Aur Brewing Company"
    },
]

const breweryArray = [
    {
        name: "Tuborg"
        founded: "1873-03-15"
        country: "Danmark"
    },
    {
        name: "The Borg"
        founded: "2001-03-15"
        country: "Germany"
    },
    {
        name: "Bork DE BORK BORK"
        founded: "1999-09-09"
        country: "Sweden"
    },
    {
        name: "Bron Yr Aur Brewing Company"
        founded: "2016-01-13"
        country: "USA"
    }
]

const pubsArray = [
    {
        name: "The First Post"
        founded: "1878-01-01"
        address: "Beginning Golden Mile, Letchworth"
    },
    {
        name: "The Old Familiar"
        founded: "1878-01-01"
        address: "second after the inaugural tankard, Letchworth"
    },
    {
        name: "The Famous Cock"
        founded: "1878-01-01"
        address: "starbucking us, Letchworth"
    },
    {
        name: "THE CROSS HANDS"
        founded: "1878-01-01"
        address: "inconspicuous, Letchworth"
    },
    {
        name: "THE GOOD COMPANIONS"
        founded: "1878-01-01"
        address: "continuing inconspicuous, Letchworth"
    },
    {
        name: "THE TRUSTY SERVANT"
        founded: "1878-01-01"
        address: "robot castle, Letchworth"
    },
    {
        name: "THE TWO-HEADED DOG"
        founded: "1878-01-01"
        address: "at the twins house, Letchworth"
    },
    {
        name: "THE MERMAID"
        founded: "1878-01-01"
        address: "nightclub Letchworth"
    },
    {
        name: "THE BEEHIVE"
        founded: "1878-01-01"
        address: "By Mr. Shepherd's house Letchworth"
    },
    {
        name: "THE KING'S HEAD"
        founded: "1878-01-01"
        address: "who knows Letchworth"
    },
    {
        name: "THE HOLE IN THE WALL"
        founded: "1878-01-01"
        address: "for a measure of the same, Letchworth"
    },
    {
        name: "THE WORLD'S END"
        founded: "1878-01-01"
        address: "that last bittersweet part of Letchworth"
    },

]

const collectionsArray = [];
collectionsArray.push({
    beers: [...beersArray]
    owner: {...usersArray[0]}
})

const resolvers = {
    Query: {
      users: () => usersArray,
      beers: () => beersArray,
      breweries: () => breweryArray,
      pubs: () => pubsArray,
      collection: (id) => {
        return collectionsArray.find((c) => c.owner.id === id);
    }
      user: (id) => {
          return usersArray.find((u) => u.id === id);
      }
    },
    Mutation: {
      loginUser: (username, password)  => {
        return usersArray.find((u) => u.password === password && u.name === username);
      },
      createUser: (userInput) => {
          const id = usersArray.length + 1;
          const newUser = {
            id,
            ...userInput
          };
          usersArray.push(newUser);
          return newUser;
      }
    }
};

const server = new ApolloServer({
  typeDefs,
  mocks: true,
  resolvers
});


server.listen().then(({ url }) => {

  console.log(`🚀 Server ready at ${url}`)

});