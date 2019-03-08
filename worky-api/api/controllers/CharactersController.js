/**
 * CharactersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index:  async (req, res)  => {
    res.json({code:0,msg:'ok'});
  },
  'get-first-char':  async (req, res)  => {
    Characters.find().limit(1).then( char =>{
      if(char){
        return res.json({code:0,msg:'ok', data:char[0]});
      }else{
        return res.json({code:102,msg:'not found'});
      }
    }).catch( error =>{
      return res.json({code:101,msg:'server error', error:error});
    });
  },
  get:  async (req, res)  => {
    Characters.findOne(req.param('id')).then( char =>{
      if(char){
        return res.json({code:0,msg:'ok', data:char});
      }else{
        return res.json({code:102,msg:'not found', data:char});
      }
    }).catch( error =>{
      return res.json({code:101,msg:'server error', error:error});
    });
  },
  all:  async (req, res)  => {
    //define current page
    let page      = req.query.page    === undefined ? 1     : req.query.page;
    //define the limit rows for each page
    let rows      = req.query.rows    === undefined ? 12    : req.query.rows;
    //skip calc for the pagination
    let skip  = (page-1) * rows;
    //filter
    let where = {img:{'!=':''}};
    //get the cout for all characteres in the database
    let count = await Characters.count(where);
    //find all characteres but only get the minimal fields requierds for the component
    Characters.find({where:where,select:['name','link','img','slug']})
    .sort([{name:'ASC'}])
    .skip(skip)
    .limit(rows)
    .then( characters =>{
      if(characters){
        let pages = Math.ceil(count/rows);
        //return the ok response
        return res.json({
          code:0,
          msg:'ok',
          data:characters,
          pages:{
            current_page:page,
            rows:rows,
            last_page:pages,
            count:count
          }})

        }else{
          //if something wrong
          return res.json({code:400,msg:'If the datase is wrong'})
        }
    }).catch(error =>{
      //return the error response
      return res.json({code:400,msg:'error',error:error})
    });
  }
};
