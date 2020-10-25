  new Vue({
            el:"#div_body",
            data:{
                type_ID:0,
                platformInterface:{
                    id:0,
                    search:"",
                    if_search:false,
                    Scroll:0,
                    dataList:[]
                },
                hardwareInterface:{
                    id:1,
                    search:"",
                    if_search:false,
                    Scroll:0,
                    dataList:[]
                }
            },
            created:function(){
                //初始化页面
                this.type_ID = 0;
                //获取平台接口
                this.getDate();
            },
            computed:{

            },
            methods:{
                getDate:function () {
                    if(this.type_ID==0){
                        //获取平台接口
                        this.platformInterface.dataList = [
                            {
                                title:"用户相关",
                                show:false,
                                data:[
                                
										
								 {
                                        title:"个人信息",
                                        title_show:false,
                                        show:false,
                                        type:"类",
                                        url:"CdmaoUser(用户专属ID)",
                                        parameter:[
										{key:"userId",
                                                type:"用户ID",
										describe:"Int"},
										{key:"userName",
                                                type:"用户名称",
										describe:"Str"},
										{key:"userStudId",
                                                type:"用户工作室ID",
										describe:"Int"},
										{key:"userStudName",
                                                type:"用户工作室名称",
										describe:"Str"},
										{key:"userStudLevel",
                                                type:"用户工作室等级",
										describe:"Int"},
										{key:"userBenoId",
                                                type:"用户被关注ID",
										describe:"List"},
										{key:"userBenoName",
                                                type:"用户被关注名称",
										describe:"List"},
										{key:"userBenoAvatar",
                                                type:"用户被关注头像链接",
										describe:"List"},
										{key:"userAtteId",
                                                type:"用户关注ID",
										describe:"List"},
										{key:"userAtteName",
                                                type:"用户关注名称",
										describe:"List"},
										{key:"userAtteAvatar",
                                                type:"用户关注头像",
										describe:"List"},
										
										{key:"desc",
                                                type:"用户简介",
										describe:"Str"},
										{key:"doing",
                                                type:"用户正在做",
										describe:"Str"},
										{key:"viewTs",
                                                type:"用户作品流量",
										describe:"Int"},
										{key:"forkedTs",
                                                type:"用户作品再创作",
										describe:"Int"},
										{key:"colTs",
                                                type:"用户收藏",
										describe:"Int"},
										
											{key:"userAvatar",
                                                type:"用户头像链接",
										describe:"Str"}
										
										
                                        ]
                                    }, {
                                        title:"个人封面作品",
                                        title_show:false,
                                        show:false,
                                        type:"类",
                                        url:"CdmaoUser(用户专属ID)",
                                        parameter:[
										{key:"fmWorkId",
                                                type:"封面作品ID",
										describe:"Int"},
										
										{key:"fwWorkAvatar",
                                                type:"封面作品图片链接",
										describe:"Str"},
												{key:"fmWorkName ",
                                                type:"封面作品名称",
										describe:"Str"}
										
                                        ]
                                    },
									
									
									
									
									
									
                                    
                                  
                                ]
                            },
							
							{
                                title:"作品相关",
                                show:false,
                                data:[
                                    {
                                        title:"首页作品",
                                        title_show:false,
                                        show:false,
                                        type:"类",
                                        url:"CdmaoHomeWork(作品识别码)",
                                        parameter:[
                                              {
                                                key:"作品识别码",
                                                type:"识别码参数：新作喵喵看，点猫，动作，休闲，射击，艺术，冒险，学术，故事",
                                                describe:"List"
                                            },  {
                                                key:"workId",
                                                type:"作品ID",
                                                describe:"List"
                                            }, {
                                                key:"workDesc",
                                                type:"作品介绍",
                                                describe:"List"
                                            }, {
                                                key:"workViewTs",
                                                type:"作品流量",
                                                describe:"List"
                                            }, {
                                                key:"workPraiTs",
                                                type:"作品赞数",
                                                describe:"List"
                                            }, {
                                                key:"workMakerId ",
                                                type:"作品作者ID",
                                                describe:"List"
                                            },{
                                                key:"workMakerName",
                                                type:"作品作者名称",
                                                describe:"List"
                                            },{
                                                key:"workMakerAvatar",
                                                type:"作品作者头像链接",
                                                describe:"List"
                                            },{
                                                key:"workAvatar",
                                                type:"作品图片链接",
                                                describe:"List"
                                            }
											
											
											
											
											
                                        ]
                                    
                                    },{
                                        title:"作品类",
                                        title_show:false,
                                        show:false,
                                        type:"类",
                                        url:"CdmaoWorks(作品ID)",
                                        parameter:[	
                                        ]
                                    },   {
                                        title:"作品信息",
                                        title_show:false,
                                        show:false,
                                        type:"类",
                                        url:"CdmaoWorks(作品ID)",
                                        parameter:[
                                              {
                                                key:"workName",
                                                type:"作品名称",
                                                describe:"Str"
                                            },   {
                                                key:"workIntr",
                                                type:"作品介绍",
                                                describe:"Str"
                                            },   {
                                                key:"workDesc",
                                                type:"作品操作介绍",
                                                describe:"Str"
                                            },   {
                                                key:"viewTs",
                                                type:"作品流量",
                                                describe:"Str"
                                            },   {
                                                key:"workName",
                                                type:"作品名称",
                                                describe:"Str"
                                            },   {
                                                key:"praiTs",
                                                type:"作品赞量",
                                                describe:"Str"
                                            },   {
                                                key:"collTs",
                                                type:"作品收藏",
                                                describe:"Str"
                                            },   {
                                                key:"commTs",
                                                type:"作品评论",
                                                describe:"Int"
                                            },   {
                                                key:"workAvatar",
                                                type:"作品照片链接",
                                                describe:"Str"
                                            },  
  {
                                                key:"makerName",
                                                type:"作品作者名称",
                                                describe:"Str"
                                            },   
  {
                                                key:"makerSign",
                                                type:"作品作者介绍",
                                                describe:"Str"
                                            },   
  											{
                                                key:"makerId",
                                                type:"作品作者ID",
                                                describe:"Int"
                                            }

                                        ]
                                    
                                    },
  {
                                        title:"作品评论",
                                        title_show:false,
                                        show:false,
                                        type:"类",
                                        url:"CdmaoWorks(作品ID)",
                                        parameter:[
                                              {
                                                key:"dId",
                                                type:"作品父评论ID",
                                                describe:"List"
                                            },   {
                                                key:"dUserId",
                                                type:"作品评论作者ID",
                                                describe:"List"
                                            },   {
                                                key:"dUserName",
                                                type:"作品评论作者名称",
                                                describe:"List"
                                            },   {
                                                key:"dUserAvatar",
                                                type:"作品评论作者头像链接",
                                                describe:"List"
                                            },   {
                                                key:"dStudio",
                                                type:"作品评论作者工作室",
                                                describe:"Str"
                                            },   {
                                                key:"dContent",
                                                type:"作品评论内容",
                                                describe:"List"
                                            }

                                        ]
                                    
                                    },
									
									
									 {
                                        title:"作品搜索",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"CdmaoSeaWork(关键字)",
                                        parameter:[
                                              {
                                                key:"关键字",
                                                type:"返回值为矩阵，包含作者信息,内容等",
                                                describe:"Dict"
                                            }

                                        ]
                                    
                                    },
									  {
                                        title:"作品子评论",
                                        title_show:false,
                                        show:false,
                                        type:"类函数",
                                        url:"get_Sub(父评论ID)",
                                        parameter:[
                                              {
                                                key:"无",
                                                type:"返回值为矩阵，包含作者信息,内容等",
                                                describe:"Dict"
                                            }

                                        ]
                                    
                                    },
									
                                  
                                ]
                            },
							
							
							
							
									
							{
                                title:"工作室相关",
                                show:false,
                                data:[
                                    {
                                        title:"工作室类",
                                        title_show:false,
                                        show:false,
                                        type:"类",
                                        url:"CdmaoStudio(工作室ID)",
                                        parameter:[
                                      
                                        ]
                                    
                                    },
									  {
                                        title:"工作室资料",
                                        title_show:false,
                                        show:false,
                                        type:"类",
                                        url:"CdmaoStudio(工作室ID)",
                                        parameter:[
                                              {
                                                key:"studId",
                                                type:"工作室标识（不是ID）",
												
                                                describe:"Int"
                                            },
                                                 {
                                                key:"studName",
                                                type:"工作室名称",
												
                                                describe:"Str"
                                            },     {
                                                key:"studScore ",
                                                type:"工作室积分",
												
                                                describe:"Int"
                                            },   {
                                                key:"studAvatar",
                                                type:"工作室头像链接",
												
                                                describe:"Str"
                                            },     {
                                                key:"studLevel",
                                                type:"工作室等级",
												
                                                describe:"Int"
                                            },     {
                                                key:"studDesc",
                                                type:"工作室介绍",
												
                                                describe:"Str"
                                            },     {
                                                key:"studMembersId",
                                                type:"工作室成员ID",
												
                                                describe:"List"
                                            }, {
                                                key:"studMembersName",
                                                type:"工作室成员名称",
												
                                                describe:"List"
                                            }, {
                                                key:"studMembersAvatar",
                                                type:"工作室成员头像链接",
												
                                                describe:"List"
                                            }, {
                                                key:"studMembersPos",
                                                type:"工作室成员介绍",
												
                                                describe:"List"
                                            }, {
                                                key:"studMembersId",
                                                type:"工作室成员ID",
												
                                                describe:"List"
                                            }, {
                                                key:"studMembersQQ",
                                                type:"工作室成员QQ",
												
                                                describe:"List"
                                            }
                                        ]
                                    
                                    }, {
                                        title:"工作室评论",
                                        title_show:false,
                                        show:false,
                                        type:"类函数",
                                        url:"get_Discussions(self)",
                                        parameter:[
                                              {
                                                key:"无",
                                                type:"返回值为矩阵，包含作者信息,内容等",
												
                                                describe:"Dict"
                                            }
                                            
                                        ]
                                    
                                    },
									 {
                                        title:"工作室搜索",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:" CdmaoSeaStud(关键字)",
                                        parameter:[
                                              {
                                                key:"关键字",
                                                type:"返回值为矩阵，包含作者信息,内容等",
												
                                                describe:"Dict"
                                            }
                                            
                                        ]
                                    
                                    },
									{
                                        title:"工作室作品",
                                        title_show:false,
                                        show:false,
                                        type:"类函数",
                                        url:"get_work(排序方式)",
                                        parameter:[
                                              {
                                                key:"排序方式",
                                                type:"排序参数：new最新 hot最火。返回值为矩阵。",
                                                describe:"Dict"
                                            }
                                        ]
                                    },
									
									
									
								
									
									
									
									
									
									
									

                                    
                                  
                                ]
                            },
							
							{
                                title:"论坛相关",
                                show:false,
                                data:[
                                    {
                                        title:"论坛帖子信息",
                                        title_show:false,
                                        show:false,
                                        type:"类",
                                        url:"CdmaoForumIn(帖子ID)",
                                        parameter:[
                                              {
                                                key:"writerId",
                                                type:"帖子用户ID",
												
                                                describe:"Int"
                                            },
											 {
                                                key:"writerName",
                                                type:"帖子用户名称",
												
                                                describe:"Str"
                                            },
											 {
                                                key:"writerAvatar",
                                                type:"帖子用户头像链接",
												
                                                describe:"Str"
                                            }, {
                                                key:"writerStudId",
                                                type:"帖子用户工作室ID",
												
                                                describe:"Int"
                                            },
											 {
                                                key:"writerStudName",
                                                type:"帖子用户工作室名称",
												
                                                describe:"Str"
                                            }, {
                                                key:"writerStudLevel",
                                                type:"帖子用户工作室等级",
												
                                                describe:"Int"
                                            }, {
                                                key:"writerId",
                                                type:"帖子用户ID",
												
                                                describe:"Int"
                                            },
											{
                                                key:"postBoard",
                                                type:"帖子用户名称",
												
                                                describe:"Str"
                                            },
											{
                                                key:"postBoardId",
                                                type:"帖子用户ID",
												
                                                describe:"Int"
                                            },{
                                                key:"writerId",
                                                type:"帖子用户ID",
												
                                                describe:"Int"
                                            },{
                                                key:"postView",
                                                type:"帖子流量",
												
                                                describe:"Int"
                                            },{
                                                key:"content",
                                                type:"帖子内容",
												
                                                describe:"Str"
                                            },
										
											 {
                                                key:"postTitle",
                                                type:"帖子名称",
												
                                                describe:"Str"
                                            }
                                           
                                        ]
                                    
                                    
                                    
                                    },
									
									
									

									
									
									  {
                                        title:"论坛前20信息",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"CdmaoForum(page)",
                                        parameter:[
                                              {
                                                key:"page",
                                                type:"page参数： （1论坛广场，17热门活动，5你问我答，2积木编程乐园，10工作室，25师徒广场，26源码精灵，13NOC编程比赛，9作品秀，7灌水池塘，18Scratch专区，21休闲作品专区，19动作游戏专区，20射击游戏专区，23艺术作品专区，22学术作品专区，24工作室招新，12求素材，11Python乐园，3代码岛，6动漫小说，8我要提建议，4通天塔）返回值为矩阵。",
                                                describe:"Dict"
                                            }
                                        ]
                                    },
								
									 	
									  {
                                        title:"论坛搜索",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"CdmaoSeaForum(关键字)",
                                        parameter:[
                                              {
                                                key:"关键字",
                                                type:"返回值为矩阵，包含作者信息,内容,ID等",
                                                describe:"Dict"
                                            }
                                        ]
                                    },
									
									
									
									
									
                                  
                                ]
                            },
							
							
							{
                                title:"数据提交相关",
                                show:false,
                                data:[
                                    {
                                        title:"Cookie设置",
                                        title_show:false,
                                        show:false,
                                        type:"变量",
                                        url:"submitCookie",
                                        parameter:[
                                            
                                        ]
                                    
                                    
                                    
                                    },  {
                                        title:"论坛帖子发布",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"CdmaoForumSubmit(title,content,ID)",
                                        parameter:[
                                              {
                                                key:"title",
                                                type:"帖子名称（5-50字）",
												
                                                describe:""
                                            },{
                                                key:"content",
                                                type:"论坛内容（至少10字）支持HTML",

												
												   describe:""
                                            },
											{
                                                key:"ID",
                                                type:" 板块ID参数：（1论坛广场，17热门活动，5你问我答，2积木编程乐园，10工作室，25师徒广场，26源码精灵，13NOC编程比赛，9作品秀，7灌水池塘，18Scratch专区，21休闲作品专区，19动作游戏专区，20射击游戏专区，23艺术作品专区，22学术作品专区，24工作室招新，12求素材，11Python乐园，3代码岛，6动漫小说，8我要提建议，4通天塔）",
												
												   describe:""
                                            }
											
                                            
                                        ]
                                    
                                     
                                   
                                    },
								{
                                        title:"工作室投稿作品",
                                        title_show:false,
                                        show:false,
                                        type:"类函数",
                                        url:"StudNewWork(zpid)",
                                        parameter:[
                                              {
                                                key:"zpid",
                                                type:"作品ID。需要配合类CdmaoStudio()使用",
                                                describe:""
                                            }
                                           
                                        ]
                                    
                                    
                                    
                                    },{
                                        title:"工作室删除作品",
                                        title_show:false,
                                        show:false,
                                        type:"类函数",
                                        url:"StudDeleteWork(zpid)",
                                        parameter:[
                                               {
                                                key:"zpid",
                                                type:"作品ID。需要配合类CdmaoStudio()使用",
                                                describe:""
                                            }
                                        ]
                                    
                                    
                                    
                                    },{
                                        title:"工作室资料设置",
                                        title_show:false,
                                        show:false,
                                        type:"类函数",
                                        url:"StudSet(name, preview_url, description)",
                                        parameter:[
                                              {
                                                key:"name",
                                                type:"工作室名称。需要配合类CdmaoStudio()使用",
												
                                                describe:""
                                            },
											 {
                                                key:"preview_url",
                                                type:"封面链接。需要配合类CdmaoStudio()使用",
												
                                                describe:""
                                            },
											 
										
                                            {
                                                key:"description",
                                                type:"工作室介绍。需要配合类CdmaoStudio()使用",
												
                                                describe:""
                                            }
                                        ]
                                    
                                    
                                    
                                    },{
                                        title:"论坛评论回复",
                                        title_show:false,
                                        show:false,
                                        type:"类函数",
                                        url:"SubmitComment(评论内容)",
                                        parameter:[
                                              {
                                                key:"评论内容",
                                                type:"需要配合类CdmaoForumIn()使用",
                                                describe:""
                                            }
											
                                        ]
                                    
                                    
                                    
                                    },
									
									
									
									
									
									
									
									
									{
                                        title:"论坛子评论回复",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"SubmitSub(fid, zid, content)",
                                        parameter:[
                                                 {
                                                key:"fid",
                                                type:"父(祖)评论Id。需要配合类CdmaoForumIn()使用",
                                                describe:""
                                            },
											 {
                                                key:"zid",
                                                type:"fid的子评论Id (此时fid是你的祖评论，zid是你回复的评论，若没有填0).需要配合类CdmaoForumIn()使用",
                                                describe:""
                                            },
											 {
                                                key:" content",
                                                type:"内容。需要配合类CdmaoForumIn()使用",
                                                describe:""
                                            }
                                        ]
                                    
                                    
                                    
                                    },
                                       
									
									
									
									

                                    
                                  
                                ]
                            },
							
						
							
                            
                        ];
                    }else if(this.type_ID==1){
                        //获取硬件接口

                    }
                },
                //判断Parameter是否为空，为空就隐藏
                ifShowParameter:function (obj) {
                    return obj.length>0?true:false;
                },
                //获取一级标题锚点id
                getMadianIdByTitle:function (index,id) {
                    return "api_"+id+"_"+index;
                },
                //获取二级标题锚点id
                getMadianIdByTitle_t:function (index,index2,id) {
                    return "api_"+id+"_"+index+"_"+index2;
                },
                //点击菜单右边跳转到指定内容位置
                clickJump:function (id,type,index,index2) {
                    if(type==0){
                        // $.each(this.platformInterface.dataList,function (k,v) {
                        //     if(index==k){
                        //         v.show = true;
                        //     }else{
                        //         v.show = false;
                        //     }
                        //     $.each(v.data,function (k1,v1) {
                        //         if(k+"_"+k1==index2){
                        //             v1.show = true;
                        //         }else{
                        //             v1.show = false;
                        //         }
                        //     });
                        // });
                        var h = Math.abs($("#"+id).position().top);
                        $("#div_platformInterface .div_list").animate({
                            scrollTop : h
                        },1000);
                    }else if(type==1){
                        console.log(2);
                    }
                },
                //取消
                search_button:function(t){
                    if(t == this.platformInterface.id){
                        this.platformInterface.search="";
                    }else if(t == this.hardwareInterface.id){
                        this.hardwareInterface.search="";
                    }
                },
                handleScroll:function(e){
                    if($(e.target).parent().attr("id")=="div_platformInterface"){
                        this.platformInterface.Scroll = e.target.scrollTop;
                    }else if($(e.target).parent().attr("id")=="div_hardwareInterface"){
                        this.hardwareInterface.Scroll = e.target.scrollTop;
                    }
                }
            },
            mounted:function () {
                window.addEventListener('scroll',this.handleScroll,true)
            },
            watch:{
                'platformInterface.Scroll':function (val,oldval) {
                    // console.log(val);
                },
                'hardwareInterface.Scroll':function () {

                },
                'platformInterface.search':function (val,oldval) {
                    var _this = this;
                    if(!_this.platformInterface.if_search){
                        var search = eval("/^.*?"+val+".*?$/");
                        $.each(_this.platformInterface.dataList,function (k,v) {
                            $.each(v.data,function (k1,v1) {
                                if(search.test(v1.title)){
                                    console.log(v1.title);
                                    v1.title_show = true;
                                }else{
                                    v1.title_show = false;
                                }
                            });
                        });
                    }
                    if(val.length>0){
                        _this.platformInterface.if_search = true;
                    }else{
                        _this.platformInterface.if_search = false;
                    }
                },
                'hardwareInterface.search':function (val,oldval) {
                    var _this = this;
                    if(val.length>0){
                        _this.hardwareInterface.if_search = true;
                    }else{
                        _this.hardwareInterface.if_search = false;
                    }
                }
            }
        })
