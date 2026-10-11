let body = $response.body;
try {
    let obj = JSON.parse(body);

    function applyVip(target) {
        if (!target || typeof target !== "object") return;
        target.is_vip = true;
        target.vip = true;
        target.vip_type = 1;
        target.status = 1;
        target.vip_status = 1;
        target.is_premium = true;
        target.expired_time = 4097451999000;
        target.vip_expire_time = 4097451999000;
        target.member_type = 1;
        target.is_member = true;
    }

    applyVip(obj);
    applyVip(obj.data);
    applyVip(obj.result);
    applyVip(obj.user);
    applyVip(obj.userInfo);
    applyVip(obj.member);

    body = JSON.stringify(obj);
} catch (e) {
    console.log("Wink VIP error: " + e);
}
$done({ body });
