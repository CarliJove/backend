const {Schema, model} = require ('mongoose');

const RoleSchema = Schema({
    rol:{
        type: String,
        required: [true, 'El rol es obligatorio, como tomar dos L de agua por dia']
    }
})

module.exports = model("Role", RoleSchema);