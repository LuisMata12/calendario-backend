


const getEvents=(req,res)=>{
    res.status(200).json({
        ok:true,
        msg:'Get Events'
    })
}
const postEvents=(req,res)=>{
    res.status(200).json({
        ok:true,
        msg:'Post Events'
    })
}
const putEvents=(req,res)=>{
    res.status(200).json({
        ok:true,
        msg:'Put Events'
    })
}
const deleteEvents=(req,res)=>{
    res.status(200).json({
        ok:true,
        msg:'Delete Events'
    })
}

export{
    getEvents,
    postEvents,
    putEvents,
    deleteEvents
}