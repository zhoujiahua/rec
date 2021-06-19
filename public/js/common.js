var $cm = (function () {
    var cm = {};

    cm.clear = function (url = '/users/login') {
        localStorage.clear();
        return location.href = url;
    }

    cm.auth = function (key = 'auth') {
        var auth = localStorage.getItem(key);
        if (!auth) return this.clear();
        return JSON.parse(auth);
    }

    cm.headers = function (obj = {}) {
        var auth = this.auth();
        return Object.assign({
            "Accept": "application/json; charset=utf-8",
            "Authorization": "Bearer " + auth.accessToken
        }, obj)
    }

    cm.logout = function (url = '/users/login') {
        return this.clear(url)
    }

    cm.amap = function (callback) {
        // initialize map
        AMap.plugin(['AMap.CitySearch'], function () {
            showCityInfo(AMap);
        });

        // get loal city info
        function showCityInfo(AM) {
            //实例化城市查询类
            var citysearch = new AM.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var city = result.city.replace('市', '');
                        localStorage.setItem('cityInfo', JSON.stringify(result));
                        $('#localTxt').text(city);
                    }
                } else {
                    localStorage.removeItem('cityInfo');
                    $('#localTxt').text("西安");
                }
                callback(status, result)
            });
        }
    }

    return cm;
}())