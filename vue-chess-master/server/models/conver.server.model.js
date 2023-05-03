exports = module.exports = function(mongoose) {
    Schema = mongoose.Schema;
    //setting schema
    var MensajeSchema = new Schema({
        body: Object,
        send:String,
        recibe:String,
        type:String,
        created: {
            type: Date,
            default: Date.now
        }
    });
    module.exports = mongoose.model('mensajes', MensajeSchema);
}
