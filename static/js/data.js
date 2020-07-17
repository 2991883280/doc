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
                                        type:"函数",
                                        url:"user(bcmid,ID)",
                                        parameter:[
                                            {
                                                key:"bcmid",
                                                type:"bcmid-Int",
                                                describe:"<p>用户专属ID</p>",
											
												
                                            },
                                            {
                                                key:"name",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>用户名</p>"
                                            },
                                            {
                                                key:"ID",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>用户ID</p>"
                                            }, {
                                                key:"avatar",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>用户头像链接</p>"
                                            }
                                        ]
                                    },
									
									
									
                                    {
                                        title:"作品信息",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"user(bcmid,ID)",
                                        parameter:[
										    {
                                                key:"bcmid",
                                                type:"bcmid-Int",
												
                                                describe:"<p>用户专属ID</p>"
                                            },
										{
                                                key:"zpid",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>封面作品ID</p>"
                                            }, {
                                                key:"zpname",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>封面作品名称</p>"
                                            }, {
                                                key:"preview",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>封面作品图像链接</p>"
                                            }								
								
										]
                                    },  {
                                        title:"工作室资料",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"userstudio(bcmid,ID)",
                                        parameter:[
                                       
                                           {
                                                key:"bcmid",
                                                type:"bcmid-Int",
											
                                                describe:"<p>用户专属ID</p>"
                                            },
                                            {
                                                key:"subject_id",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>工作室ID</p>"
                                            },
                                            {
                                                key:"name",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>工作室名称</p>"
                                            },
                                            {
                                                key:"level",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>工作室等级</p>"
                                            }
                                        ]
                                    },  {
                                        title:"被关注资料",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"userbenoticed(bcmid,ID)",
                                        parameter:[
                                       
                                           {
                                                key:"bcmid",
                                                type:"bcmid-Int",
											
                                                describe:"<p>用户专属ID</p>"
                                            },
                                            {
                                                key:"name",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>被关注用户名称</p>"
                                            },
                                            {
                                                key:"avatar",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>被关注头像链接</p>"
                                            },
                                            {
                                                key:"total_page",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>被关注用户总数</p>"
                                            }
                                        ]
                                    }, {
                                        title:"关注资料",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"userattention(bcmid,ID)",
                                        parameter:[
                                       
                                           {
                                                key:"bcmid",
                                                type:"bcmid-Int",
											
                                                describe:"<p>用户专属ID</p>"
                                            },
                                            {
                                                key:"name",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>被关注用户名称</p>"
                                            },
                                            {
                                                key:"avatar",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>被关注头像链接</p>"
                                            },
                                            {
                                                key:"total_num",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>被关注用户总数</p>"
                                            }
                                        ]
                                    },{
                                        title:"首页轮播图",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"carouselfigure(ID)",
                                        parameter:[
                                       
                                            {
                                                key:"title",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>轮播图名称</p>"
                                            },
                                            {
                                                key:"target_url",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>轮播图链接</p>"
                                            },
                                            {
                                                key:"background_url",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>轮播图图片（宽）</p>"
                                            },  {
                                                key:"small_background_url",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>轮播图图片（窄）</p>"
                                            }
                                        ]
                                    },
									  {
                                        title:"其他数据",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"user(bcmid,ID)",
                                        parameter:[
										    {
                                                key:"bcmid",
                                                type:"bcmid-Int",
												
                                                describe:"<p>用户专属ID</p>"
                                            },
                                            {
                                                key:"viewTimes",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>浏览量</p>"
                                            }, {
                                                key:"praiseTimes",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>作品总赞数</p>"
                                            }, {
                                                key:"forkedTimes",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>再创作</p>"
                                            }, {
                                                key:"collectionTimes",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>收藏数</p>"
                                            }, {
                                                key:"code",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>API接口状态</p><p><span>code参数：200成功，404不存在</span></p>"
                                            }
                                        ]
                                    }
                                  
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
                                        type:"函数",
                                        url:"homepage(page,ID)",
                                        parameter:[
                                              {
                                                key:"page",
                                                type:"page-Int",
												
                                                describe:"<p>作品识别码</p><p><span>page参数：1新作喵喵看，2点猫，16动作，15休闲，17射击，18艺术，21冒险，19学术，20故事</span></p>"
                                            },
                                            {
                                                key:"name",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品名称</p>"
                                            },
                                            {
                                                key:"zpid",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品ID</p>"
                                            }, {
                                                key:"description",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品介绍</p>"
                                            }, {
                                                key:"view_times",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品浏览量</p>"
                                            }
											, {
                                                key:"praise_times",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品点赞数</p>"
                                            }
											, {
                                                key:"preview",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品封面图片链接</p>"
                                            }
											, {
                                                key:"userid",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品作者ID</p>"
                                            }
											, {
                                                key:"nickname",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品作者名称</p>"
                                            }
											, {
                                                key:"avatar_url",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品作者头像链接</p>"
                                            }
                                        ]
                                    
                                    },
									
									 {
                                        title:"个人作品",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"personalwork(bcmid, ID)",
                                        parameter:[
                                              {
                                                key:"bcmid",
                                                type:"bcmid-Int",
												
                                                describe:"<p>用户ID</p>"
                                            },
                                            {
                                                key:"id",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品ID</p>"
                                            },
                                            {
                                                key:"name",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品名称</p>"
                                            }, {
                                                key:"description",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品介绍</p>"
                                            }, {
                                                key:"preview",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品图片链接</p>"
                                            }
											
											, {
                                                key:"total_num",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>作品总数</p>"
                                            }
											
                                        ]
                                    
                                    },
                                     {
                                        title:"详细作品",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"detailedworks(zpid, ID)",
                                        parameter:[
                                              {
                                                key:"zpid",
                                                type:"zpid-Int",
												
                                                describe:"<p>作品ID</p>"
                                            },
                                            {
                                                key:"work_name",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>作品名称</p>"
                                            },
                                            {
                                                key:"work_introduction",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>作品介绍</p>"
                                            }, {
                                                key:"operation_description",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>作品操作介绍</p>"
                                            }, {
                                                key:"view_times",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>作品浏览量</p>"
                                            }
											
											, {
                                                key:"praise_times",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>作品点赞数</p>"
                                            }, {
                                                key:"collect_times",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>作品收藏数</p>"
                                            }, {
                                                key:"comment_times",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>作品评论数</p>"
                                            }, {
                                                key:"preview",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>作品图片链接</p>"
                                            }, {
                                                key:"id",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>作品作者ID</p>"
                                            }, {
                                                key:"avatar",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>作品作者头像链接</p>"
                                            }
											, {
                                                key:"nickname",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>作品作者名称</p>"
                                            }
											, {
                                                key:"signature",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>作品作者关于</p>"
                                            }
											
                                        ]
                                    
                                    },{
                                        title:"作品评论",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"workreview(zpid, ID)",
                                        parameter:[
                                              {
                                                key:"zpid",
                                                type:"zpid-Int",
												
                                                describe:"<p>作品ID</p>"
                                            },
                                            {
                                                key:"id",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>评论ID</p>"
                                            },
                                            {
                                                key:"avatar_url",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>评论用户头像链接</p>"
                                            }, {
                                                key:"userid",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>评论用户ID</p>"
                                            }, {
                                                key:"nickname",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>评论用户名称</p>"
                                            }
											, {
                                                key:"subject_id",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>评论用户工作室ID</p>"
                                        }, {
                                                key:"content",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>评论内容</p>"
                                        }
                                        ]
                                    
                                    },
									{
                                        title:"作品子评论获取",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"worksub(zpid, plid,ID)",
                                        parameter:[
                                              {
                                                key:"zpid",
                                                type:"zpid-String",
												
                                                describe:"<p>作品ID</p>"
                                            },
                                            {
                                                key:"plid",
                                                type:"plid-String",
												
                                                describe:"<p>父评论ID</p>"
                                            },
                                            {
                                                key:"id",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>子评论ID</p>"
                                            }, {
                                                key:"avatar_url",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>子评论用户头像链接</p>"
                                            },  {
                                                key:"userid",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>子评论用户ID</p>"
                                            },  {
                                                key:"nickname",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>子评论用户名称</p>"
                                            }, 
											{
                                                key:"subject_id",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>子评论用户工作室ID</p>"
                                            }
											, {
                                                key:"content",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>子评论内容</p>"
                                        }
                                        ]
                                    
                                    },
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
                                  {
                                        title:"搜索作品",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"worksearch(name, ID)",
                                        parameter:[
                                              {
                                                key:"name",
                                                type:"name-Int",
												
                                                describe:"<p>关键字</p>"
                                            },
                                            {
                                                key:"id",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>作品ID</p>"
                                            },
                                            {
                                                key:"name",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>作品名称</p>"
                                            }, {
                                                key:"userid",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>作品用户ID</p>"
                                            }, {
                                                key:"nickname",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>作品用户名称</p>"
                                            }
											
											, {
                                                key:"avatar_url",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>作品用户头像链接</p>"
                                            }, {
                                                key:"view_times",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>作品浏览量</p>"
                                            }, {
                                                key:"praise_times",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>作品点赞数</p>"
                                            }, {
                                                key:"preview",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>作品图片链接</p>"
                                            }, {
                                                key:"preview",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>作品图片链接</p>"
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
                                        title:"工作室介绍",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"shops(bcmid,ID)",
                                        parameter:[
                                              {
                                                key:"bcmid",
                                                type:"page-Int",
												
                                                describe:"<p>工作室ID</p>"
                                            },
                                            {
                                                key:"name",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>工作室名称</p>"
                                            },
                                            {
                                                key:"total_score",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>工作室积分</p>"
                                            }, {
                                                key:"preview_url",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>工作室图像链接</p>"
                                            }, {
                                                key:"level",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>工作室等级</p>"
                                            }
											, {
                                                key:"description",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>工作室介绍</p>"
                                        }
                                        ]
                                    
                                    },
									  {
                                        title:"工作室成员",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"stmembers(bcmid,ID)",
                                        parameter:[
                                              {
                                                key:"bcmid",
                                                type:"bcmid-Int",
												
                                                describe:"<p>工作室ID</p>"
                                            },
                                            {
                                                key:"name",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>用户名称</p>"
                                            },
                                            {
                                                key:"avatar_url",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>用户头像链接</p>"
                                            }, {
                                                key:"position",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>用户职位</p>"
                                            }, {
                                                key:"qq",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>用户QQ</p>"
                                            }
											, {
                                                key:"total",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>用户总人数</p>"
                                        }
                                        ]
                                    
                                    }, {
                                        title:"工作室评论",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"streview(gzsid, ID)",
                                        parameter:[
                                              {
                                                key:"gzsid",
                                                type:"gzsid-Int",
												
                                                describe:"<p>工作室ID</p>"
                                            },
                                            {
                                                key:"id",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>评论ID</p>"
                                            },
                                            {
                                                key:"avatar_url",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>评论用户头像链接</p>"
                                            }, {
                                                key:"userid",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>评论用户ID</p>"
                                            }, {
                                                key:"nickname",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>评论用户名称</p>"
                                            }
											, {
                                                key:"subject_id",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>评论用户工作室ID</p>"
                                        }, {
                                                key:"content",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>评论内容</p>"
                                        }
                                        ]
                                    
                                    },
									{
                                        title:"工作室搜索",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"stsearch(name, ID)",
                                        parameter:[
                                              {
                                                key:"name",
                                                type:"name-String",
												
                                                describe:"<p>关键字</p>"
                                            },
                                            {
                                                key:"name",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>工作室名称</p>"
                                            },
                                            {
                                                key:"id",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>工作室ID</p>"
                                            }, {
                                                key:"preview_url",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>工作室头像</p>"
                                            }, {
                                                key:"position",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>工作室介绍</p>"
                                            }
											, {
                                                key:"level",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>工作室等级</p>"
                                        }, {
                                                key:"total",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>满足要求工作室数量</p>"
                                        }
                                        ]
                                    
                                    },
									
									
									
									{
                                        title:"工作室作品",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"stworks(page,sort,ID)",
                                        parameter:[
                                              {
                                                key:"bcmid",
                                                type:"page-Int",
												
                                                describe:"<p>工作室ID</p>"
                                            },
                                            {
                                                key:"sort",
                                                type:"sort-String",
											
                                                describe:"<p>工作室作品排序</p><p><span>sort参数：-audited_at,-id最新作品，-n_likes最火作品，-created_at制作日期</span></p>"
                                            },
                                            {
                                                key:"zpid",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品ID</p>"
                                            }, {
                                                key:"name",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品名称</p>"
                                            }, {
                                                key:"view_times",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品浏览量</p>"
                                            }
											, {
                                                key:"praise_times",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品赞数</p>"
                                        }, {
                                                key:"preview",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作品封面链接</p>"
                                        }, {
                                                key:"userid",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作者作品ID</p>"
                                        }, {
                                                key:"nickname",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作者作品名称</p>"
                                        }, {
                                                key:"avatar_url",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>作者作品头像链接</p>"
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
                                        title:"论坛总获取",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"forumac(page,ID)",
                                        parameter:[
                                              {
                                                key:"page",
                                                type:"page-Int",
												
                                                describe:"<p>论坛标识</p><p><span>page参数：1论坛广场，17热门活动，5你问我答，2积木编程乐园，10工作室，25师徒广场，26源码精灵，13NOC编程比赛，9作品秀，7灌水池塘，18Scratch专区，21休闲作品专区，19动作游戏专区，20射击游戏专区，23艺术作品专区，22学术作品专区，24工作室招新，12求素材，11Python乐园，3代码岛，6动漫小说，8我要提建议，4通天塔</span></p>"
                                            },
                                            {
                                                key:"id",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子ID</p>"
                                            },
                                            {
                                                key:"title",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子标题</p>"
                                            }, {
                                                key:"content",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子内容</p>"
                                            }, {
                                                key:"userid",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子发布用户ID</p>"
                                            }
											, {
                                                key:"nickname",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子发布用户名称</p>"
                                        }, {
                                                key:"avatar_url",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子发布用户头像链接</p>"
                                        }, {
                                                key:"subject_id",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子发布用户工作室ID</p>"
                                        }, {
                                                key:"work_shop_name",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子发布用户工作室名称</p>"
                                        }, {
                                                key:"work_shop_level",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子发布用户工作室等级</p>"
                                        }
                                        ]
                                    
                                    
                                    
                                    },
									  {
                                        title:"论坛搜素",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"forumsea(name, ID)",
                                        parameter:[
                                              {
                                                key:"name",
                                                type:"name-String",
												
                                                describe:"<p>搜索关键字</p>"
                                            },
                                            {
                                                key:"id",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子ID</p>"
                                            },
                                            {
                                                key:"title",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子标题</p>"
                                            }, {
                                                key:"userid",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子发布用户ID</p>"
                                            }
											, {
                                                key:"nickname",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子发布用户名称</p>"
                                        }, {
                                                key:"avatar_url",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子发布用户头像链接</p>"
                                        }, {
                                                key:"subject_id",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子发布用户工作室ID</p>"
                                        }, {
                                                key:"work_shop_name",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子发布用户工作室名称</p>"
                                        }, {
                                                key:"work_shop_level",
                                                type:"ID-String",
												ru:"List",
                                                describe:"<p>帖子发布用户工作室等级</p>"
                                        }
                                        ]
                                    
                                    
                                    
                                    },
									{
                                        title:"论坛单条信息",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"forumsi(ltid, ID)",
                                        parameter:[
                                              {
                                                key:"ltid",
                                                type:"ltid-Int",
												
                                                describe:"<p>论坛帖子ID</p>"
                                            },
                                            {
                                                key:"userid",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>帖子用户ID</p>"
                                            },
                                            {
                                                key:"title",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>帖子标题</p>"
                                            }, {
                                                key:"content",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>帖子内容</p>"
                                            }, {
                                                key:"userid",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>帖子发布用户ID</p>"
                                            }
											, {
                                                key:"nickname",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>帖子发布用户名称</p>"
                                        }, {
                                                key:"avatar_url",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>帖子发布用户头像链接</p>"
                                        }, {
                                                key:"subject_id",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>帖子发布用户工作室ID</p>"
                                        }, {
                                                key:"work_shop_name",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>帖子发布用户工作室名称</p>"
                                        }, {
                                                key:"work_shop_level",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>帖子发布用户工作室等级</p>"
                                        }, {
                                                key:"board_name",
                                                type:"ID-String",
												ru:"String",
                                                describe:"<p>帖子所属板块名称</p>"
                                              
                                        }, {
                                                key:"board_id",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>帖子所属板块ID</p>"
                                        }
										, {
                                                key:"n_views",
                                                type:"ID-String",
												ru:"Int",
                                                describe:"<p>帖子浏览次数</p>"
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
                                        title:"评论发布",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"submitcomment(zpid,content,cookie)",
                                        parameter:[
                                              {
                                                key:"zpid",
                                                type:"zpid-Int",
												
                                                describe:"<p>作品/工作室ID</p>"
                                            },
                                            {
                                                key:"content",
                                                type:"content-String",
												
                                                describe:"<p>发布内容</p><p><span>支持HTML</span></p>"
                                            },
                                            {
                                                key:"cookie",
                                                type:"cookie-String",
												
                                                describe:"<p>发布cookie数据</p>"
                                            }
                                        ]
                                    
                                    
                                    
                                    },  {
                                        title:"评论回复",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"submitcommenthf(zpid,zhfid,chfid,content, cookie)",
                                        parameter:[
                                              {
                                                key:"zpid",
                                                type:"zpid-Int",
												
                                                describe:"<p>作品/工作室ID</p>"
                                            },{
                                                key:"zhfid",
                                                type:"zhfid-Int",
												
												   describe:"<p>父评论ID</p>"
                                            },
											{
                                                key:"chfid",
                                                type:"chfid-Int",
												
												   describe:"<p>子评论ID</p><p><span>提示：如无请填0</span></p>"
                                            },
											
                                            {
                                                key:"content",
                                                type:"content-String",
												
                                                describe:"<p>发布内容</p><p><span>支持HTML</span></p>"
                                            },
                                            {
                                                key:"cookie",
                                                type:"cookie-String",
												
                                                describe:"<p>发布cookie数据</p>"
                                            }
                                        ]
                                    
                                    
                                    
                                    },
								{
                                        title:"评论点赞",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"submitcommentzan(plid,cookie)",
                                        parameter:[
                                              {
                                                key:"plid",
                                                type:"plid-Int",
												
                                                describe:"<p>评论/工作室ID</p>"
                                            },
                                            {
                                                key:"cookie",
                                                type:"cookie-String",
												
                                                describe:"<p>发布cookie数据</p>"
                                            }
                                        ]
                                    
                                    
                                    
                                    },{
                                        title:"发布论坛贴",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"forumposting(title,content,ID,cookie)",
                                        parameter:[
                                              {
                                                key:"title",
                                                type:"title-String",
												
                                                describe:"<p>论坛标题（5-50字）</p>"
                                            },
											 {
                                                key:"content",
                                                type:"content-String",
												
                                                describe:"<p>论坛内容（至少10字）</p><p><span>支持HTML</span></p>"
                                            },
											 {
                                                key:"ID",
                                                type:"ID-Int",
												
                                                describe:"<p>投稿板块</p><p><span>ID参数：1论坛广场，17热门活动，5你问我答，2积木编程乐园，10工作室，25师徒广场，26源码精灵，13NOC编程比赛，9作品秀，7灌水池塘，18Scratch专区，21休闲作品专区，19动作游戏专区，20射击游戏专区，23艺术作品专区，22学术作品专区，24工作室招新，12求素材，11Python乐园，3代码岛，6动漫小说，8我要提建议，4通天塔</span></p>"
                                            },
											 {
                                                key:"title",
                                                type:"title-String",
												
                                                describe:"<p>论坛标题（5-50字）</p>"
                                            },
                                            {
                                                key:"cookie",
                                                type:"cookie-String",
												
                                                describe:"<p>发布cookie数据</p>"
                                            }
                                        ]
                                    
                                    
                                    
                                    },{
                                        title:"论坛评论发布",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"forumcomments(ltid, content, cookie)",
                                        parameter:[
                                              {
                                                key:"ltid",
                                                type:"ltid-Int",
												
                                                describe:"<p>论坛ID</p>"
                                            },
											 {
                                                key:"content",
                                                type:"content-String",
												
                                                describe:"<p>评论内容</p><p><span>支持HTML</span></p>"
                                            },
											 
										
                                            {
                                                key:"cookie",
                                                type:"cookie-String",
												
                                                describe:"<p>发布cookie数据</p>"
                                            }
                                        ]
                                    
                                    
                                    
                                    },{
                                        title:"论坛评论回复",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"forumcommentshf(plid, parent_id,content, cookie)",
                                        parameter:[
                                              {
                                                key:"plid",
                                                type:"plid-Int",
												
                                                describe:"<p>父论坛ID</p>"
                                            },
											 {
                                                key:"content",
                                                type:"content-String",
												
                                                describe:"<p>评论内容</p><p><span>支持HTML</span></p>"
                                            },
											 
										 {
                                                key:"parent_id",
                                                type:"parent_id-Int",
												
                                                describe:"<p>子评论ID</p><p><span>提示：如无请填0</span></p>"
                                            },
                                            {
                                                key:"cookie",
                                                type:"cookie-String",
												
                                                describe:"<p>发布cookie数据</p>"
                                            }
                                        ]
                                    
                                    
                                    
                                    },
									
									
									
									
									
									
									
									
									{
                                        title:"工作室作品投稿/删除",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"stdeletesworks(shop_id,zpid,ID,cookie)",
                                        parameter:[
                                              {
                                                key:"shop_id",
                                                type:"shop_id-Int",
												
                                                describe:"<p>工作室标识（不是ID）/p>"
                                            },
											 {
                                                key:"zpid",
                                                type:"zpid-Int",
												
                                                describe:"<p>作品ID</p>"
                                            },
											 {
                                                key:"ID",
                                                type:"ID-Int",
												
                                                describe:"<p>操作方式</p><p><span>ID参数：1删除作品，2投稿作品</span></p>"
                                            },
                                            {
                                                key:"cookie",
                                                type:"cookie-String",
												
                                                describe:"<p>cookie数据</p>"
                                            }
                                        ]
                                    
                                    
                                    
                                    },
                                       {
                                        title:"工作室管理",
                                        title_show:false,
                                        show:false,
                                        type:"函数",
                                        url:"stmanagement(shop_id,name,preview_url,description,cookie)",
                                        parameter:[
                                              {
                                                key:"shop_id",
                                                type:"shop_id-Int",
												
                                                describe:"<p>工作室标识（不是ID）</p>"
                                            },
											 {
                                                key:"name",
                                                type:"name-String",
												
                                                describe:"<p>工作室名称</p>"
                                            },{
                                                key:"preview_url",
                                                type:"preview_url-String",
												
                                                describe:"<p>工作室头像链接</p>"
                                            },
                                            {
                                                key:"description",
                                                type:"description-String",
												
                                                describe:"<p>介绍内容</p>"
                                            },
                                            {
                                                key:"cookie",
                                                type:"cookie-String",
												
                                                describe:"<p>cookie数据</p>"
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
