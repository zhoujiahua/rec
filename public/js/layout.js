layui.use(['layer', 'form'], function () {
    var layer = layui.layer,
        form = layui.form,
        $ = layui.jquery;

    // 初始化
    AMap.plugin(['AMap.CitySearch'], function () {
        showCityInfo(AMap);
    });


    //监听提交
    form.on('submit(formBtn)', function (data) {
        layer.msg(JSON.stringify(data.field));
        return false;
    });

    //获取用户所在城市信息
    function showCityInfo(AM) {
        //实例化城市查询类
        var citysearch = new AM.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var city = result.city;
                    localStorage.setItem('cityInfo', JSON.stringify(result));
                    $('#localTxt').text(city);
                }
            } else {
                localStorage.removeItem('cityInfo');
                $('#localTxt').text("西安市");
            }
        });
    }

})

