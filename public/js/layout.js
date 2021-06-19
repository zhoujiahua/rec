layui.use(['layer'], function () {
    var layer = layui.layer,
        $ = layui.jquery;

    loadProfile()
    function loadProfile() {
        $.ajax({
            type: "GET",
            url: "/api/users/profile",
            data: {},
            headers: $cm.headers(),
            dataType: "json",
            success: function (res) {
                if (res.success) {
                    var r = res.result;
                    $('#userInfo').text(r.email);
                }
                console.log(res)
            },
            error: function (err) {
                if (err.status == 401) {
                    return $cm.logout();
                }
            }
        });
    }

    // logout
    $('#logout').click(function () {
        var loadShred = layer.load(1, {
            shade: [0.5, '#fff']
        });
        var timer = setTimeout(function () {
            clearTimeout(timer);
            layer.close(loadShred);
            return $cm.logout();
        }, 1500)
    })

    // initialize data
    loadCitys();

    // load city list
    function loadCitys() {
        $.ajax({
            type: "GET",
            url: "/api/renting/citys",
            data: {},
            headers: $cm.headers(),
            dataType: "json",
            success: function (res) {
                if (res.success) {
                    var d = res.result,
                        html = '';
                    $.each(d, function (k, v) {
                        html += '<li data-city=' + JSON.stringify(v) + ' ><strong>' + v.city + '</strong></li>'
                    })
                    $('#cityul').html(html);
                }
            },
            error: function (err) {
                if (err.status == 401) {
                    return $cm.logout();
                }
            }
        });
    }
})

