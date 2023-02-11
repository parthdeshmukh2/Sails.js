module.exports = {
  attributes: {
    first_name: {
      type: "string",
    },
    last_name: {
      type: "string",
    },
    phone: {
      type: "string",
    },
    email: {
      type: "string",
    },
    dob: {
      type: "string",
    },
    parent_consent: {
      type: "boolean",
    },

    evaluation_done: {
      type: "boolean",
    },
    // interest:{
    //     type:"array"
    // }
  },
  datastore:'mongodb'
};
