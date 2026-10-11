let obj = JSON.parse($response.body);
if (obj.data) {
    obj.data.is_vip = true;
    obj.data.vip_type = 1;
    obj.data.vip_expire_time = 4097451999000;
    obj.data.status = 1;
}
$done({body: JSON.stringify(obj)});
