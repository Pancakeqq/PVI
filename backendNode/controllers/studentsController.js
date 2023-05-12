
exports.getStudents = (req, res, next) =>{
    console.log('getting students');
    res.send('getst')
}

exports.postStundet = (req, res, next) =>{
    console.log('posting students');
    res.send('postst')
}

exports.delStudent = (req, res, next) =>{
    console.log('deleting students');
    res.send('delst')
}

