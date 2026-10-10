/*
 * CapCut All-in-One Pro & AdBlock Bypass
 * Supported Devices: iOS / Android (Shadowrocket/QuantumultX)
 */

let body = $response.body;
let url = $request.url;

if (body) {
    try {
        let obj = JSON.parse(body);

        // ១. ស្ទាក់ចាប់ និងកែប្រែប្រវត្តិរូបអ្នកប្រើប្រាស់ (User Profile)
        if (url.indexOf("/user/profile") !== -1 || url.indexOf("/account/info") !== -1) {
            if (obj.data) {
                obj.data.is_pro = true;
                obj.data.status = 1;
                obj.data.vip_type = 1;
                obj.data.purchase_info = {
                    "is_vip": true,
                    "pro_user": 1,
                    "expired_time": 4092599349, // ឆ្នាំ ២០៩៩
                    "start_time": 1700000000,
                    "product_id": "capcut_pro_yearly",
                    "purchase_type": 1,
                    "is_subs": true
                };
                if (obj.data.watermark_info) {
                    obj.data.watermark_info.has_watermark = false;
                }
            }
        }

        // ២. ស្ទាក់ចាប់មុខងារកាត់ត និង Effect (Feature & Effect Config Bypass)
        if (url.indexOf("/sub/check") !== -1 || url.indexOf("/vip/status") !== -1) {
            obj = {
                "status_code": 0,
                "message": "success",
                "data": {
                    "is_pro": true,
                    "pro_user": 1,
                    "vip_type": 1,
                    "expired_time": 4092599349,
                    "purchase_info": {
                        "is_vip": true,
                        "expired_time": 4092599349
                    }
                }
            };
        }

        // ៣. បិទផ្ទាំង Ads ក្នុងទម្រង់ JSON Response (បន្ថែមពីលើការ Reject URL)
        if (url.indexOf("/ads/") !== -1 || url.indexOf("/banner/") !== -1) {
            if (obj.data) obj.data = []; // លុប Ads ចោលទាំងអស់
        }

        body = JSON.stringify(obj);
    } catch (e) {
        console.log("CapCut VIP Core Error: " + e);
    }
}

$done({ body });
