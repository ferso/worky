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
    let page      = req.query.page    === undefined ? 1     : req.query.page;
    let rows      = req.query.rows    === undefined ? 12    : req.query.rows;
    // let keyword   = req.query.keyword === undefined ? false : req.query.keyword;
    let skip  = (page-1) * rows;
    let where = {img:{'!=':''}};

    let count = await Characters.count(where);
    Characters.find({where:where,select:['name','link','img']})
    .sort([{name:'ASC'}])
    .skip(skip)
    .limit(rows)
    .then( characters =>{
      let pages = Math.ceil(count/rows);
      return res.json({
        code:0,
        msg:'ok',
        data:characters,
        pages:{
          current_page:page,
          rows:rows,
          last_page:pages,
          count:count
        }});
    }).catch(error =>{
      return res.json({code:400,msg:'error',error:error});
    });
  }
};
