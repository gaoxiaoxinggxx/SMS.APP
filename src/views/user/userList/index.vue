<template>
    <div class="search">
        <div>
            <span>姓名：</span>
            <a-input placeholder="姓名" />
        </div>
        <div>
            <span>邮箱：</span>
            <a-input placeholder="邮箱" />
        </div>
        <div>
            <a-button type="primary">
                <template #icon>
                    <SearchOutlined />
                </template>
                搜索
            </a-button>
        </div>
    </div>
    <div class="table">
        <a-table :columns="columns">

        </a-table>
        <div class="footer">
            <a-pagination show-less-items />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { SearchOutlined } from '@ant-design/icons-vue';
const columns = [
    {
        title: "用户名",
        dataIndex: "name",
    },
    {
        title: "邮箱",
        dataIndex: "email",
    },
    {
        title: "角色",
        dataIndex: "role",
    },
    {
        title: "状态",
        dataIndex: "status",
    },
    {
        title: "创建时间",
        dataIndex: "createdOn",
    }
];
</script>
<style lang="scss" scoped>
.search {
    padding: 10px;
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    >div {
        display: flex;
        flex-direction: column;
        margin: 5px 10px 0px 5px;
    }
}

.table {
    margin-top: 10px;
    padding: 10px;
}
</style>