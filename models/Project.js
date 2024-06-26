const mongoose =  require('mongoose');


const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    description: {
        type: String,
        required: true,
        trim:true
    },    
    author: {
        type: String,
        required: true,
        trim: true
    },
    issues: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Issue'
        }
    ],
    labels: [
        {
            type: String
        }
    ]
  },
  {
    timestamps: true
  }
    
)

const Project = mongoose.model('Project', projectSchema); 

module.exports = Project