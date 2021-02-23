<template>
    <div class="page-information page-full">
        <div class="action">
            <div class="left">
                <el-button type="primary" @click="on_showInsDialog">发布信息</el-button>
            </div>
            <div class="right">
                <el-form :inline="true" :model="filterData">
                    <el-form-item>
                        <el-input v-model="filterData.search" placeholder="输入搜索内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="table">
            <el-table :data="tableData" border :fit="true" style="height: 100%" height="100%">
                <el-table-column type="index" label="序号" :width="tableCloumnWidth.w100"></el-table-column>
                <el-table-column prop="title" :show-overflow-tooltip="true" label="标题" :min-width="tableCloumnWidth.w200"> </el-table-column>
                <el-table-column prop="roomName" :show-overflow-tooltip="true" label="所属分类" :width="tableCloumnWidth.w150">
                    <template slot-scope="scope">
                        <el-tag :type="articleType.type[scope.row.articleType]" disable-transitions>{{ articleType.name[scope.row.articleType] }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="author" :show-overflow-tooltip="true" label="作者" :width="tableCloumnWidth.w200"> </el-table-column>
                <el-table-column prop="lookNum" :show-overflow-tooltip="true" label="访问量" :width="tableCloumnWidth.w200"> </el-table-column>
                <el-table-column prop="createTime" :show-overflow-tooltip="true" label="发布时间" :width="tableCloumnWidth.w200"> </el-table-column>
                <el-table-column label="操作" :width="tableCloumnWidth.w150" fixed="right">
                    <template slot-scope="scope">
                        <el-button size="mini" type="warning" @click="on_handleInformation('update', scope.$index, scope.row)">编辑</el-button>
                        <el-popconfirm title="确认删除？" @confirm="on_handleInformation('delete', scope.$index, scope.row)">
                            <el-button slot="reference" size="mini" type="danger">删除</el-button>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="page">
            <el-pagination :page-size="filterData.limit" layout="total, prev, pager, next" :total="filterData.total" @current-change="on_changeCurrentPage"> </el-pagination>
        </div>
        <!-- 添加信息弹出框 -->
        <el-drawer :visible.sync="isShow.insDialog" title="发布信息" :modal-append-to-body="false" :size="globalData.drawerSize">
            <div class="drawer-wrapper">
                <div class="drawer-bodyer">
                    <el-form ref="form" :model="insData" label-width="100px">
                        <el-form-item label="资讯标题">
                            <el-input v-model="insData.title"></el-input>
                        </el-form-item>
                        <el-form-item label="作者">
                            <el-input v-model="insData.author"></el-input>
                        </el-form-item>
                        <el-form-item label="展示内容">
                            <el-input v-model="insData.content" type="textarea" :rows="6"></el-input>
                        </el-form-item>
                        <el-form-item label="资讯类型">
                            <el-select v-model="insData.articleType" placeholder="请选择">
                                <el-option label="教师守则" :value="1"> </el-option>
                                <el-option label="新闻资讯" :value="2"> </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="上传封面">
                            <el-upload action="#" list-type="picture-card" :auto-upload="false">
                                <i slot="default" class="el-icon-plus"></i>
                                <div slot="file" slot-scope="{ file }">
                                    <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                                    <span class="el-upload-list__item-actions">
                                        <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                            <i class="el-icon-zoom-in"></i>
                                        </span>
                                        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                                            <i class="el-icon-download"></i>
                                        </span>
                                        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                            <i class="el-icon-delete"></i>
                                        </span>
                                    </span>
                                </div>
                            </el-upload>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="drawer-footer">
                    <el-button type="info" plain @click="isShow.insDialog = false">取消</el-button>
                    <el-button type="primary" @click="on_insInformation">提交</el-button>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
export default {
    name: 'Information',
    data() {
        return {
            // 表格数据
            tableData: [
                {
                    id: 1,
                    title: '教师守则1',
                    content: '守则内容1',
                    author: '等等',
                    newImg: null,
                    lookNum: 122,
                    newsText: '<h1>费德勒开口</h1>',
                    isShow: 1,
                    articleType: 1,
                    hotInfo: null,
                    createTime: '2021-01-06 10:19:57'
                },
                {
                    id: 2,
                    title: '教师守则2',
                    content: '守则内容2',
                    author: '安安',
                    newImg: null,
                    lookNum: 200,
                    newsText: '<h1>费德勒开口</h1>',
                    isShow: 1,
                    articleType: 1,
                    hotInfo: null,
                    createTime: '2021-01-06 10:20:26'
                },
                {
                    id: 3,
                    title: '教师守则3',
                    content: '守则内容3',
                    author: '定定',
                    newImg: null,
                    lookNum: 189,
                    newsText: '<h1>费德勒开口</h1>',
                    isShow: 1,
                    articleType: 1,
                    hotInfo: null,
                    createTime: '2021-01-06 10:20:26'
                }
            ],
            // 过滤数据
            filterData: {
                search: '',
                page: 1,
                limit: 20,
                total: 0
            },
            // 行数据
            rowData: {},
            // 显示隐藏
            isShow: {
                insDialog: false,
                updDialog: false,
                infoDialog: false
            },
            // 添加数据
            insData: {
                title: '',
                author: '',
                content: '',
                newImg: '',
                newsText: '',
                articleType: ''
            },
            articleType: {
                name: {
                    1: '教师守则',
                    2: '新闻资讯'
                },
                type: {
                    1: 'primary',
                    2: 'success'
                }
            }
        };
    },
    created() {
        // this.api_selImformation();
    },
    methods: {
        on_handleInformation(type, index, item) {
            this.rowData = item;
            if (type === 'delete') {
                console.log('delete');
                this.api_delInformation();
            }
        },
        // 显示添加轮播弹框
        on_showInsDialog() {
            this.isShow.insDialog = true;
        },
        // 改变当前页
        on_changeCurrentPage(number) {
            this.filterData.page = number;
            this.api_selImformation();
        },
        on_insInformation() {
            this.api_insInformation();
        },
        // 接口-获取教师列表
        api_selImformation(type) {
            let hash = {
                url: '/news/getnewslist',
                params: {
                    page: this.filterData.page,
                    limit: this.filterData.limit
                }
            };
            if (this.filterData.search) {
                hash.params.search = this.filterData.search;
            }
            this.$Api(hash)
                .then((res) => {
                    console.log('=====res');
                    console.log(res);
                    if (type === undefined) {
                        let list = res.data.list || [];
                        // list.forEach((item) => {
                        //     item.checkStatusName = this.checkStatus.name[item.checkStatus] || '';
                        //     item.statusName = this.status.name[item.status] || '';
                        //     item.recommendName = this.recommend.name[item.recommend] || '';
                        // });
                        this.tableData = list;
                        this.filterData.total = res.data.totals || 0;
                    }
                })
                .catch((err) => {
                    console.log('=====err');
                    console.log(err);
                });
        },
        // 接口-添加信息
        api_insInformation() {
            this.$Api({
                url: '/news/addnews',
                method: 'post',
                params: this.insData
            })
                .then((res) => {
                    console.log('res==');
                    console.log(res);
                    this.$message({
                        message: res.message,
                        type: 'success'
                    });
                    this.api_selImformation();
                })
                .catch((err) => {
                    console.log('err==');
                    console.log(err);
                });
        },
        // 接口-删除信息
        api_delInformation() {
            this.$Api({
                url: '/news/removenews',
                method: 'delete',
                params: {
                    newsId: this.rowData.id
                }
            })
                .then((res) => {
                    console.log('res==');
                    console.log(res);
                    this.isShow.insDialog = false;
                    this.$message({
                        message: res.message,
                        type: 'success'
                    });
                    this.api_selImformation();
                })
                .catch((err) => {
                    console.log('err==');
                    console.log(err);
                });
        }
    }
};
</script>

<style lang="scss">
.page-information {
}
</style>
