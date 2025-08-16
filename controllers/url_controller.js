const url = require("../models/url.js");
const {nanoid} = require("nanoid");
async function createurl(req,res)
{
    const body = req.body;
    const redirected = body.url;//provided by user
    const all_urls = await url.find({});
    console.log(redirected);
    if(!redirected)
    {
        return res.status(400).json({error: "URL is required,bhai"});
    }
    const shortid = nanoid(8);//generates a random 8-character string
    await url.create({ 
        short_id: shortid,
        redirect_url: redirected
    });
return res.render("url_created", { recent_id: shortid,});
}
async function geturl(req,res)
{
    // res.json({message: "URLs fetched successfully"});
  const all_urls = await url.find({});
  console.log(all_urls);
  res.render("home", {
    urls: all_urls//all_urls is an array of all URL documents from the database
  });

}
async function handlegeturlbyid(req,res)
{
    const short_id = req.params.url;
    const url_data = await url.findOne({short_id: short_id});
    if(!url_data)
    {
        return res.status(404).json({error: "URL not not found"});
    }
    const url_id = url_data._id;
    await url.findByIdAndUpdate(url_id, { click_count: url_data.click_count+1 } );
    return res.redirect(url_data.redirect_url);
}
async function giveanalytics(req,res)
{
    const redirected_id = req.params.url;
    const url_data = await url.findOne({redirect_url: redirected_id});
    if(!url_data)
    {
        return res.status(404).json({error: "URL not found"});
    }
    return res.json({message: "URL analytics fetched successfully", short_id: url_data.short_id, click_count: url_data.click_count});
}
module.exports = {
    createurl,
    geturl,
    handlegeturlbyid,
    giveanalytics
}