// 選手国籍対応マップ（全プリセット選手に対応）
const playerNatMap = {
    "クルトワ": "🇧🇪", "トレント": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "コナテ": "🇫🇷", "ハイセン": "🇪🇸", "ククレジャ": "🇪🇸",
    "チュアメニ": "🇫🇷", "バルベルデ": "🇺🇾", "ベリンガム": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "ヴィニシウス": "🇧🇷", "エンバペ": "🇫🇷",
    "ギュレル": "🇹🇷", "ルニン": "🇺🇦", "カレラス": "🇪🇸", "カマヴィンガ": "🇫🇷", "ロドリゴ": "🇧🇷",
    "ミリトン": "🇧🇷", "アセンシオ": "🇪🇸", "リュディガー": "🇩🇪", "メンディ": "🇫🇷", "ドゥンフリース": "🇳🇱",
    "ベルナルド": "🇵🇹", "ドンナルンマ": "🇮🇹", "リコ・ルイス": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "ルベン・ディアス": "🇵🇹",
    "グエイ": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "グヴァルディオル": "🇭🇷", "アンダーソン": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "エンソ": "🇦🇷", "フォーデン": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "シェルキ": "🇫🇷", "セメンヨ": "🇬🇭", "ハーランド": "🇳🇴", "ルリ": "🇦🇷", "フサノフ": "🇺🇿",
    "アイト＝ヌーリ": "🇩🇿", "コヴァチッチ": "🇭🇷", "マルムシュ": "🇪🇬", "ニコ・ゴンサレス": "🇪🇸", "マテウス・ヌネス": "🇵🇹",
    "イリマン・ディアウ": "🇸🇳", "ニコ・オライリー": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "ブアディ": "🇫🇷", "ジョアン・ガルシア": "🇪🇸", "カンセロ": "🇵🇹",
    "クバルシ": "🇪🇸", "クリステンセン": "🇩🇰", "バルデ": "🇪🇸", "ペドリ": "🇪🇸", "フレンキー・デ・ヨング": "🇳🇱",
    "オルモ": "🇪🇸", "ヤマル": "🇪🇸", "ラフィーニャ": "🇧🇷", "ガブリエウ・ジェズス": "🇧🇷", "シュチェスニー": "🇵🇱",
    "エリック・ガルシア": "🇪🇸", "ガビ": "🇪🇸", "フェルミン": "🇪🇸", "アデイェミ": "🇩🇪", "リヴァコヴィッチ": "🇭🇷",
    "ジェラール・マルティン": "🇪🇸", "ロドリ": "🇪🇸", "アンソニー・ゴードン": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "ローニー・バルドギ": "🇸🇪", "ラヤ": "🇪🇸",
    "ティンバー": "🇳🇱", "サリバ": "🇫🇷", "ガブリエウ": "🇧🇷", "カラフィオーリ": "🇮🇹", "ライス": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "ウーデゴール": "🇳🇴", "ブルーノ・ギマランイス": "🇧🇷", "サカ": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "エゼ": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "ハヴァーツ": "🇩🇪",
    "ケパ": "🇪🇸", "ホワイト": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "コンサ": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "スビメンディ": "🇪🇸", "マドゥエケ": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "ヒンカピエ": "🇪🇨", "メリーノ": "🇪🇸", "ツォリス": "🇬🇷", "ギョケレシュ": "🇸🇪", "メスリエ": "🇫🇷",
    "ノイアー": "🇩🇪", "スタニシッチ": "🇭🇷", "ウパメカノ": "🇫🇷", "キム・ミンジェ": "🇰🇷", "デイヴィス": "🇨🇦",
    "キミッヒ": "🇩🇪", "ムシアラ": "🇩🇪", "ビショフ": "🇩🇪", "ルイス・ディアス": "🇨🇴", "オリーセ": "🇫🇷",
    "ケイン": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "ウルライヒ": "🇩🇪", "イトウ": "🇯🇵", "ター": "🇩🇪", "ライマー": "🇦🇹",
    "パヴロヴィッチ": "🇩🇪", "サイバリ": "🇲🇦", "ニャブリ": "🇩🇪", "メッシ": "🇦🇷", "C・ロナウド": "🇵🇹",
    "ジダン": "🇫🇷", "ロナウジーニョ": "🇧🇷", "ペレ": "🇧🇷", "マラドーナ": "🇦🇷", "マルディーニ": "🇮🇹",
    "カンナヴァーロ": "🇮🇹", "ブッフォン": "🇮🇹", "ヤシン": "🇷🇺"
};

// 搭載10クラブの選手データ（26-27シーズン版）
const clubPresetData = {
    "レアル・マドリード": [
        { name: "クルトワ", pos: "GK", altPos: [], category: "GK", rating: 90, squadRole: "starter" },
        { name: "トレント", pos: "RB", altPos: ["RWB", "CMF"], category: "DF", rating: 87, squadRole: "starter" },
        { name: "コナテ", pos: "CB", altPos: ["RB"], category: "DF", rating: 85, squadRole: "starter" },
        { name: "ハイセン", pos: "CB", altPos: ["DMF"], category: "DF", rating: 86, squadRole: "starter" },
        { name: "ククレジャ", pos: "LB", altPos: ["LWB"], category: "DF", rating: 83, squadRole: "starter" },
        { name: "チュアメニ", pos: "DMF", altPos: ["CB", "CMF"], category: "MF", rating: 86, squadRole: "starter" },
        { name: "バルベルデ", pos: "CMF", altPos: ["RMF", "RWG", "RB"], category: "MF", rating: 89, squadRole: "starter" },
        { name: "ベリンガム", pos: "AMF", altPos: ["CMF", "CF"], category: "MF", rating: 90, squadRole: "starter" },
        { name: "ヴィニシウス", pos: "LWG", altPos: ["LMF", "CF"], category: "FW", rating: 91, squadRole: "starter" },
        { name: "エンバペ", pos: "CF", altPos: ["LWG", "RWG"], category: "FW", rating: 92, squadRole: "starter" },
        { name: "ギュレル", pos: "RMF", altPos: ["AMF", "RWG", "CMF"], category: "MF", rating: 84, squadRole: "starter" },

        { name: "ルニン", pos: "GK", altPos: [], category: "GK", rating: 82, squadRole: "bench" },
        { name: "カレラス", pos: "LB", altPos: ["LWB"], category: "DF", rating: 80, squadRole: "bench" },
        { name: "カマヴィンガ", pos: "CMF", altPos: ["DMF", "LB"], category: "MF", rating: 85, squadRole: "bench" },
        { name: "ロドリゴ", pos: "RWG", altPos: ["LWG", "CF", "RMF"], category: "FW", rating: 87, squadRole: "bench" },
        { name: "ミリトン", pos: "CB", altPos: [], category: "DF", rating: 85, squadRole: "bench" },

        { name: "アセンシオ", pos: "CB", altPos: ["RB"], category: "DF", rating: 80, squadRole: "out" },
        { name: "リュディガー", pos: "CB", altPos: [], category: "DF", rating: 84, squadRole: "out" },
        { name: "メンディ", pos: "LB", altPos: ["LWB"], category: "DF", rating: 80, squadRole: "out" },
        { name: "ドゥンフリース", pos: "RB", altPos: ["RWB", "RMF"], category: "DF", rating: 83, squadRole: "out" },
        { name: "ベルナルド", pos: "CMF", altPos: ["AMF", "RMF"], category: "MF", rating: 86, squadRole: "out" }
    ],

    "マンチェスター・C": [
        { name: "ドンナルンマ", pos: "GK", altPos: [], category: "GK", rating: 90, squadRole: "starter" },
        { name: "リコ・ルイス", pos: "RB", altPos: ["LB", "CMF"], category: "DF", rating: 82, squadRole: "starter" },
        { name: "ルベン・ディアス", pos: "CB", altPos: [], category: "DF", rating: 88, squadRole: "starter" },
        { name: "グエイ", pos: "CB", altPos: ["RB"], category: "DF", rating: 84, squadRole: "starter" },
        { name: "グヴァルディオル", pos: "CB", altPos: ["LB"], category: "DF", rating: 86, squadRole: "starter" },
        { name: "アンダーソン", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 82, squadRole: "starter" },
        { name: "エンソ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 85, squadRole: "starter" },
        { name: "フォーデン", pos: "AMF", altPos: ["RMF", "RWG", "CMF", "LWG"], category: "MF", rating: 89, squadRole: "starter" },
        { name: "シェルキ", pos: "AMF", altPos: ["RMF", "RWG", "CMF"], category: "MF", rating: 88, squadRole: "starter" },
        { name: "セメンヨ", pos: "RWG", altPos: ["LWG", "CF" ,"RMF", "LMF"], category: "FW", rating: 82, squadRole: "starter" },
        { name: "ハーランド", pos: "CF", altPos: [], category: "FW", rating: 92, squadRole: "starter" },

        { name: "ルリ", pos: "GK", altPos: [], category: "GK", rating: 78, squadRole: "bench" },
        { name: "フサノフ", pos: "CB", altPos: ["RB"], category: "DF", rating: 84, squadRole: "bench" },
        { name: "アイト＝ヌーリ", pos: "LB", altPos: ["LWB"], category: "DF", rating: 81, squadRole: "bench" },
        { name: "コヴァチッチ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 83, squadRole: "bench" },
        { name: "マルムシュ", pos: "CF", altPos: ["LWG", "RWG"], category: "FW", rating: 84, squadRole: "bench" },

        { name: "ニコ・ゴンサレス", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 82, squadRole: "out" },
        { name: "マテウス・ヌネス", pos: "CMF", altPos: ["DMF", "RB"], category: "MF", rating: 82, squadRole: "out" },
        { name: "イリマン・ディアウ", pos: "CF", altPos: ["LWG", "RWG"], category: "FW", rating: 82, squadRole: "out" },
        { name: "ニコ・オライリー", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 82, squadRole: "out" },
        { name: "ブアディ", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 80, squadRole: "out" }
    ],

    "バルセロナ": [
        { name: "ジョアン・ガルシア", pos: "GK", altPos: [], category: "GK", rating: 84, squadRole: "starter" },
        { name: "カンセロ", pos: "RB", altPos: ["LB", "RWB", "RMF"], category: "DF", rating: 84, squadRole: "starter" },
        { name: "クバルシ", pos: "CB", altPos: [], category: "DF", rating: 84, squadRole: "starter" },
        { name: "クリステンセン", pos: "CB", altPos: ["DMF"], category: "DF", rating: 82, squadRole: "starter" },
        { name: "バルデ", pos: "LB", altPos: ["LWB"], category: "DF", rating: 83, squadRole: "starter" },
        { name: "ペドリ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 88, squadRole: "starter" },
        { name: "フレンキー・デ・ヨング", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 87, squadRole: "starter" },
        { name: "オルモ", pos: "AMF", altPos: ["CMF", "LMF", "LWG"], category: "MF", rating: 86, squadRole: "starter" },
        { name: "ヤマル", pos: "RWG", altPos: ["AMF", "RMF"], category: "FW", rating: 91, squadRole: "starter" },
        { name: "ラフィーニャ", pos: "LWG", altPos: ["RWG", "LMF", "RMF"], category: "FW", rating: 90, squadRole: "starter" },
        { name: "ガブリエウ・ジェズス", pos: "CF", altPos: ["LWG", "RWG"], category: "FW", rating: 83, squadRole: "starter" },

        { name: "シュチェスニー", pos: "GK", altPos: [], category: "GK", rating: 84, squadRole: "bench" },
        { name: "エリック・ガルシア", pos: "CB", altPos: ["DMF"], category: "DF", rating: 80, squadRole: "bench" },
        { name: "ガビ", pos: "CMF", altPos: ["DMF", "AMF", "LMF"], category: "MF", rating: 85, squadRole: "bench" },
        { name: "フェルミン", pos: "AMF", altPos: ["CMF", "LMF"], category: "MF", rating: 82, squadRole: "bench" },
        { name: "アデイェミ", pos: "LWG", altPos: ["CF", "RWG"], category: "FW", rating: 83, squadRole: "bench" },

        { name: "リヴァコヴィッチ", pos: "GK", altPos: [], category: "GK", rating: 83, squadRole: "out" },
        { name: "ジェラール・マルティン", pos: "LB", altPos: ["LWB"], category: "DF", rating: 78, squadRole: "out" },
        { name: "ロドリ", pos: "CMF", altPos: ["DMF"], category: "MF", rating: 91, squadRole: "out" },
        { name: "アンソニー・ゴードン", pos: "LWG", altPos: ["LMF", "RWG"], category: "FW", rating: 82, squadRole: "out" },
        { name: "ローニー・バルドギ", pos: "RWG", altPos: ["LWG", "AMF"], category: "FW", rating: 79, squadRole: "out" }
    ],

    "アーセナル": [
        { name: "ラヤ", pos: "GK", altPos: [], category: "GK", rating: 87, squadRole: "starter" },
        { name: "ティンバー", pos: "RB", altPos: ["LB", "CB", "RWB"], category: "DF", rating: 84, squadRole: "starter" },
        { name: "サリバ", pos: "CB", altPos: [], category: "DF", rating: 89, squadRole: "starter" },
        { name: "ガブリエウ", pos: "CB", altPos: [], category: "DF", rating: 87, squadRole: "starter" },
        { name: "カラフィオーリ", pos: "LB", altPos: ["CB", "LWB"], category: "DF", rating: 83, squadRole: "starter" },
        { name: "ライス", pos: "DMF", altPos: ["CMF", "CB"], category: "MF", rating: 90, squadRole: "starter" },
        { name: "ウーデゴール", pos: "AMF", altPos: ["CMF", "RMF"], category: "MF", rating: 91, squadRole: "starter" },
        { name: "ブルーノ・ギマランイス", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 87, squadRole: "starter" },
        { name: "サカ", pos: "RWG", altPos: ["RMF", "LWG", "RWB"], category: "FW", rating: 89, squadRole: "starter" },
        { name: "エゼ", pos: "AMF", altPos: ["LWG", "LMF", "CMF"], category: "MF", rating: 85, squadRole: "starter" },
        { name: "ハヴァーツ", pos: "CF", altPos: ["AMF", "CMF"], category: "FW", rating: 85, squadRole: "starter" },

        { name: "ケパ", pos: "GK", altPos: [], category: "GK", rating: 82, squadRole: "bench" },
        { name: "ホワイト", pos: "RB", altPos: ["CB", "RWB"], category: "DF", rating: 84, squadRole: "bench" },
        { name: "コンサ", pos: "CB", altPos: ["RB"], category: "DF", rating: 84, squadRole: "bench" },
        { name: "スビメンディ", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 85, squadRole: "bench" },
        { name: "マドゥエケ", pos: "RWG", altPos: ["LMF", "RMF", "LWG"], category: "FW", rating: 83, squadRole: "bench" },

        { name: "ヒンカピエ", pos: "CB", altPos: ["LB"], category: "DF", rating: 82, squadRole: "out" },
        { name: "メリーノ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 83, squadRole: "out" },
        { name: "ツォリス", pos: "LWG", altPos: ["LW", "RWG"], category: "FW", rating: 80, squadRole: "out" },
        { name: "ギョケレシュ", pos: "CF", altPos: [], category: "FW", rating: 87, squadRole: "out" },
        { name: "メスリエ", pos: "GK", altPos: [], category: "GK", rating: 82, squadRole: "out" }
    ],

    "バイエルン": [
        { name: "ノイアー", pos: "GK", altPos: [], category: "GK", rating: 86, squadRole: "starter" },
        { name: "スタニシッチ", pos: "RB", altPos: ["CB", "LB"], category: "DF", rating: 81, squadRole: "starter" },
        { name: "ウパメカノ", pos: "CB", altPos: [], category: "DF", rating: 84, squadRole: "starter" },
        { name: "キム・ミンジェ", pos: "CB", altPos: [], category: "DF", rating: 83, squadRole: "starter" },
        { name: "デイヴィス", pos: "LB", altPos: ["LWB", "LMF"], category: "DF", rating: 85, squadRole: "starter" },
        { name: "キミッヒ", pos: "DMF", altPos: ["CMF", "RB", "RWB"], category: "MF", rating: 88, squadRole: "starter" },
        { name: "ムシアラ", pos: "AMF", altPos: ["CMF"], category: "MF", rating: 90, squadRole: "starter" },
        { name: "ビショフ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 81, squadRole: "starter" },
        { name: "ルイス・ディアス", pos: "LWG", altPos: ["LMF", "RWG"], category: "FW", rating: 87, squadRole: "starter" },
        { name: "オリーセ", pos: "RMF", altPos: ["RWG", "AMF"], category: "FW", rating: 90, squadRole: "starter" },
        { name: "ケイン", pos: "CF", altPos: ["AMF"], category: "FW", rating: 91, squadRole: "starter" },

        { name: "ウルライヒ", pos: "GK", altPos: [], category: "GK", rating: 78, squadRole: "bench" },
        { name: "イトウ", pos: "CB", altPos: ["LB"], category: "DF", rating: 81, squadRole: "bench" },
        { name: "ター", pos: "CB", altPos: [], category: "DF", rating: 84, squadRole: "bench" },
        { name: "ライマー", pos: "RB", altPos: ["RWB", "DMF", "CMF"], category: "DF", rating: 81, squadRole: "bench" },
        { name: "パヴロヴィッチ", pos: "CMF", altPos: ["DMF"], category: "MF", rating: 82, squadRole: "bench" },

        { name: "サイバリ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 83, squadRole: "out" },
        { name: "パヴロヴィッチ", pos: "CMF", altPos: ["DMF"], category: "MF", rating: 82, squadRole: "out" },
        { name: "ニャブリ", pos: "RWG", altPos: ["LWG", "CF"], category: "FW", rating: 83, squadRole: "out" },
        { name: "ブイ", pos: "RB", altPos: ["RWB"], category: "DF", rating: 80, squadRole: "out" },
        { name: "ザネ", pos: "RWG", altPos: ["LWG"], category: "FW", rating: 84, squadRole: "out" }
    ],

    "ドルトムント": [
        { name: "コベル", pos: "GK", altPos: [], category: "GK", rating: 87, squadRole: "starter" },
        { name: "アントン", pos: "CB", altPos: ["RB"], category: "DF", rating: 82, squadRole: "starter" },
        { name: "シュロッターベック", pos: "CB", altPos: ["LB"], category: "DF", rating: 90, squadRole: "starter" },
        { name: "ベンセバイニ", pos: "LB", altPos: ["CB", "LWB"], category: "DF", rating: 81, squadRole: "starter" },
        { name: "リエルソン", pos: "RB", altPos: ["RWB", "LB"], category: "DF", rating: 81, squadRole: "starter" },
        { name: "ジョーブ・ベリンガム", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 85, squadRole: "starter" },
        { name: "ヌメチャ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 81, squadRole: "starter" },
        { name: "ヴェールマン", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 82, squadRole: "starter" },
        { name: "ヌワネリ", pos: "AMF", altPos: ["RMF", "CMF"], category: "MF", rating: 82, squadRole: "starter" },
        { name: "カレツァス", pos: "AMF", altPos: ["RMF", "CMF"], category: "MF", rating: 81, squadRole: "starter" },
        { name: "ギラシ", pos: "CF", altPos: [], category: "FW", rating: 88, squadRole: "starter" },

        { name: "ドリューズ", pos: "GK", altPos: [], category: "GK", rating: 76, squadRole: "bench" },
        { name: "スヴェンソン", pos: "LB", altPos: ["LWB", "LMF"], category: "DF", rating: 80, squadRole: "bench" },
        { name: "チュクエメカ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 80, squadRole: "bench" },
        { name: "ザビッツァー", pos: "CMF", altPos: ["RMF", "AMF", "DMF"], category: "MF", rating: 82, squadRole: "bench" },
        { name: "バイアー", pos: "CF", altPos: ["LWG", "RWG"], category: "FW", rating: 80, squadRole: "bench" },

        { name: "ファビオ・シルヴァ", pos: "CF", altPos: ["LWG"], category: "FW", rating: 82, squadRole: "out" },
        { name: "フィリッポ・マネ", pos: "CB", altPos: [], category: "DF", rating: 76, squadRole: "out" },
        { name: "カウア・プラテス", pos: "LB", altPos: ["CB"], category: "DF", rating: 75, squadRole: "out" },
        { name: "フェリックス・ヌメチャ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 81, squadRole: "out" },
        { name: "エムレ・ジャン", pos: "DMF", altPos: ["CB", "CMF"], category: "MF", rating: 82, squadRole: "out" }
    ],

    "チェルシー": [
        { name: "エミリアーノ・マルティネス", pos: "GK", altPos: [], category: "GK", rating: 90, squadRole: "starter" },
        { name: "ジェームズ", pos: "RB", altPos: ["RWB", "CB", "DMF"], category: "DF", rating: 84, squadRole: "starter" },
        { name: "ラクロワ", pos: "CB", altPos: [], category: "DF", rating: 82, squadRole: "starter" },
        { name: "コルウィル", pos: "CB", altPos: ["LB"], category: "DF", rating: 82, squadRole: "starter" },
        { name: "ハト", pos: "LB", altPos: ["CB"], category: "DF", rating: 82, squadRole: "starter" },
        { name: "カイセド", pos: "DMF", altPos: ["CMF", "RB"], category: "MF", rating: 88, squadRole: "starter" },
        { name: "ヘンダーソン", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 81, squadRole: "starter" },
        { name: "パーマー", pos: "AMF", altPos: ["RMF", "RWG", "CMF"], category: "MF", rating: 90, squadRole: "starter" },
        { name: "ロジャーズ", pos: "AMF", altPos: ["LWG", "RWG", "CMF"], category: "MF", rating: 88, squadRole: "starter" },
        { name: "ペドロ・ネト", pos: "RWG", altPos: ["LWG", "RMF"], category: "FW", rating: 83, squadRole: "starter" },
        { name: "ジョアン・ペドロ", pos: "CF", altPos: ["AMF"], category: "FW", rating: 87, squadRole: "starter" },

        { name: "ペンダース", pos: "GK", altPos: [], category: "GK", rating: 79, squadRole: "bench" },
        { name: "フォファナ", pos: "CB", altPos: ["RB"], category: "DF", rating: 81, squadRole: "bench" },
        { name: "ギュスト", pos: "RB", altPos: ["RWB", "LB"], category: "DF", rating: 81, squadRole: "bench" },
        { name: "ラヴィア", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 80, squadRole: "bench" },
        { name: "ギッテンス", pos: "LWG", altPos: ["RWG", "LMF"], category: "FW", rating: 82, squadRole: "bench" },

        { name: "エステヴァン", pos: "RWG", altPos: ["AMF", "LWG"], category: "FW", rating: 81, squadRole: "out" },
        { name: "デラップ", pos: "CF", altPos: [], category: "FW", rating: 82, squadRole: "out" },
        { name: "バルコ", pos: "CMF", altPos: ["LMF", "LB"], category: "MF", rating: 81, squadRole: "out" },
        { name: "エッスーゴ", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 78, squadRole: "out" },
        { name: "トシン", pos: "CB", altPos: [], category: "DF", rating: 80, squadRole: "out" }
    ],

    "パリサンジェルマン": [
        { name: "シュヴァリエ", pos: "GK", altPos: [], category: "GK", rating: 84, squadRole: "starter" },
        { name: "ハキミ", pos: "RB", altPos: ["RWB", "RMF"], category: "DF", rating: 87, squadRole: "starter" },
        { name: "マルキーニョス", pos: "CB", altPos: ["RB", "DMF"], category: "DF", rating: 86, squadRole: "starter" },
        { name: "ザバルニー", pos: "CB", altPos: [], category: "DF", rating: 82, squadRole: "starter" },
        { name: "メンデス", pos: "LB", altPos: ["LWB"], category: "DF", rating: 85, squadRole: "starter" },
        { name: "ヴィティーニャ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 90, squadRole: "starter" },
        { name: "ファビアン・ルイス", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 85, squadRole: "starter" },
        { name: "ジョアン・ネヴェス", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 84, squadRole: "starter" },
        { name: "デンベレ", pos: "RWG", altPos: ["LWG", "CF", "RMF"], category: "FW", rating: 91, squadRole: "starter" },
        { name: "クヴァラツヘリア", pos: "LWG", altPos: ["LMF", "CF"], category: "FW", rating: 90, squadRole: "starter" },
        { name: "ドゥエ", pos: "LWG", altPos: ["AMF", "RWG"], category: "FW", rating: 87, squadRole: "starter" },

        { name: "サフォノフ", pos: "GK", altPos: [], category: "GK", rating: 79, squadRole: "bench" },
        { name: "ベラウド", pos: "CB", altPos: ["LB"], category: "DF", rating: 80, squadRole: "bench" },
        { name: "ディーニュ", pos: "LB", altPos: ["LWB"], category: "DF", rating: 80, squadRole: "bench" },
        { name: "ザイール＝エメリ", pos: "CMF", altPos: ["DMF", "RB"], category: "MF", rating: 83, squadRole: "bench" },
        { name: "アクリウシュ", pos: "RWG", altPos: ["AMF", "LWG"], category: "FW", rating: 82, squadRole: "bench" },

        { name: "フェラン", pos: "CF", altPos: ["RWG", "LWG"], category: "FW", rating: 82, squadRole: "out" },
        { name: "ルーカス・エルナンデス", pos: "CB", altPos: ["LB"], category: "DF", rating: 81, squadRole: "out" },
        { name: "パチョ", pos: "CB", altPos: [], category: "DF", rating: 84, squadRole: "out" },
        { name: "セニ・マユル", pos: "CMF", altPos: ["AMF"], category: "MF", rating: 79, squadRole: "out" },
        { name: "ザグ", pos: "LB", altPos: ["LWB"], category: "DF", rating: 74, squadRole: "out" }
    ],

    "インテルナツィオナーレ・ミラノ": [
        { name: "ジョゼップ・マルティネス", pos: "GK", altPos: [], category: "GK", rating: 82, squadRole: "starter" },
        { name: "ビセック", pos: "CB", altPos: ["RB"], category: "DF", rating: 80, squadRole: "starter" },
        { name: "アカンジ", pos: "CB", altPos: ["RB", "DMF"], category: "DF", rating: 84, squadRole: "starter" },
        { name: "バストーニ", pos: "CB", altPos: ["LB"], category: "DF", rating: 90, squadRole: "starter" },
        { name: "ディウフ", pos: "RWB", altPos: ["RMF", "RB"], category: "DF", rating: 80, squadRole: "starter" },
        { name: "バレッラ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 88, squadRole: "starter" },
        { name: "チャルハノール", pos: "DMF", altPos: ["CMF", "AMF"], category: "MF", rating: 87, squadRole: "starter" },
        { name: "スチッチ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 81, squadRole: "starter" },
        { name: "ディマルコ", pos: "LWB", altPos: ["LB", "LMF"], category: "DF", rating: 90, squadRole: "starter" },
        { name: "エスポジト", pos: "CF", altPos: ["SS", "LWG"], category: "FW", rating: 81, squadRole: "starter" },
        { name: "ラウタロ", pos: "CF", altPos: [], category: "FW", rating: 89, squadRole: "starter" },

        { name: "ディ・ジェンナーロ", pos: "GK", altPos: [], category: "GK", rating: 75, squadRole: "bench" },
        { name: "ストーンズ", pos: "CB", altPos: ["DMF"], category: "DF", rating: 84, squadRole: "bench" },
        { name: "パヴァール", pos: "RB", altPos: ["CB"], category: "DF", rating: 83, squadRole: "bench" },
        { name: "ムヒタリアン", pos: "CMF", altPos: ["AMF", "LMF"], category: "MF", rating: 82, squadRole: "bench" },
        { name: "テュラム", pos: "CF", altPos: ["LWG", "RWG"], category: "FW", rating: 86, squadRole: "bench" },

        { name: "ルイス・エンリケ", pos: "RWG", altPos: ["RMF", "LWG"], category: "FW", rating: 81, squadRole: "out" },
        { name: "ボニー", pos: "CF", altPos: [], category: "FW", rating: 79, squadRole: "out" },
        { name: "ジョーンズ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 82, squadRole: "out" },
        { name: "ジエリンスキ", pos: "CMF", altPos: ["AMF"], category: "MF", rating: 82, squadRole: "out" },
        { name: "カルロス・アウグスト", pos: "LB", altPos: ["LWB"], category: "DF", rating: 82, squadRole: "out" }
    ],

    "ACミラン": [
        { name: "メニャン", pos: "GK", altPos: [], category: "GK", rating: 88, squadRole: "starter" },
        { name: "エストゥピニャン", pos: "LB", altPos: ["LWB"], category: "DF", rating: 82, squadRole: "starter" },
        { name: "デ・ヴィンター", pos: "CB", altPos: ["RB"], category: "DF", rating: 80, squadRole: "starter" },
        { name: "トモリ", pos: "CB", altPos: [], category: "DF", rating: 83, squadRole: "starter" },
        { name: "パヴロヴィッチ", pos: "CB", altPos: ["LB"], category: "DF", rating: 81, squadRole: "starter" },
        { name: "モドリッチ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 84, squadRole: "starter" },
        { name: "ラビオ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 84, squadRole: "starter" },
        { name: "ロフタス＝チーク", pos: "CMF", altPos: ["AMF", "RMF"], category: "MF", rating: 81, squadRole: "starter" },
        { name: "プリシッチ", pos: "RWG", altPos: ["RMF", "LWG", "AMF"], category: "FW", rating: 90, squadRole: "starter" },
        { name: "ラモス", pos: "CF", altPos: ["AMF"], category: "FW", rating: 83, squadRole: "starter" },
        { name: "チュクウェゼ", pos: "RWG", altPos: ["RMF", "LWG"], category: "FW", rating: 80, squadRole: "starter" },

        { name: "トリアーニ", pos: "GK", altPos: [], category: "GK", rating: 77, squadRole: "bench" },
        { name: "ガッビア", pos: "CB", altPos: [], category: "DF", rating: 79, squadRole: "bench" },
        { name: "バルテサーギ", pos: "LB", altPos: ["CB"], category: "DF", rating: 76, squadRole: "bench" },
        { name: "ヤシャリ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 80, squadRole: "bench" },
        { name: "サレマーカーズ", pos: "RMF", altPos: ["RWG", "LMF"], category: "MF", rating: 80, squadRole: "bench" },

        { name: "ロレンツォ・コロンボ", pos: "CF", altPos: [], category: "FW", rating: 76, squadRole: "out" },
        { name: "フィリッポ・テラッチャーノ", pos: "RB", altPos: ["RMF"], category: "DF", rating: 76, squadRole: "out" },
        { name: "カマルダ", pos: "CF", altPos: [], category: "FW", rating: 76, squadRole: "out" },
        { name: "モレイラ", pos: "LWG", altPos: ["RWG", "AMF"], category: "FW", rating: 78, squadRole: "out" },
        { name: "ムサ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 80, squadRole: "out" }
    ]
};

// 初期監督（総合値80前後に設定）
const initialManagers = {
    "レアル・マドリード": { name: "ジョゼ・モウリーニョ", rating: 82, price: 250 },
    "マンチェスター・C": { name: "エンソ・マレスカ", rating: 81, price: 230 },
    "バルセロナ": { name: "ハンジ・フリック", rating: 80, price: 200 },
    "アーセナル": { name: "ミケル・アルテタ", rating: 80, price: 200 },
    "バイエルン": { name: "ヴァンサン・コンパニ", rating: 79, price: 180 },
    "ドルトムント": { name: "ニコ・コヴァチ", rating: 78, price: 160 },
    "チェルシー": { name: "シャビ・アロンソ", rating: 80, price: 200 },
    "パリサンジェルマン": { name: "ルイス・エンリケ", rating: 81, price: 220 },
    "インテルナツィオナーレ・ミラノ": { name: "クリスティアン・キヴ", rating: 79, price: 180 },
    "ACミラン": { name: "ルベン・アモリム", rating: 78, price: 160 }
};

// 獲得可能なフリー監督市場（80~95に設定）
const freeManagers = [
    { name: "ペップ・グアルディオラ", rating: 95, price: 800 },
    { name: "カルロ・アンチェロッティ", rating: 94, price: 750 },
    { name: "ユルゲン・クロップ", rating: 93, price: 700 },
    { name: "ジネディーヌ・ジダン", rating: 91, price: 620 },
    { name: "ディエゴ・シメオネ", rating: 91, price: 600 },
    { name: "シャビ・アロンソ", rating: 90, price: 550 },
    { name: "トマス・トゥヘル", rating: 89, price: 500 },
    { name: "ユリアン・ナーゲルスマン", rating: 89, price: 480 },
    { name: "アントニオ・コンテ", rating: 88, price: 450 },
    { name: "ジャン・ピエロ・ガスペリーニ", rating: 88, price: 440 },
    { name: "ウナイ・エメリ", rating: 87, price: 420 },
    { name: "ロベルト・デ・ゼルビ", rating: 86, price: 380 },
    { name: "シャビ・エルナンデス", rating: 85, price: 350 },
    { name: "ルベン・アモリム", rating: 85, price: 340 },
    { name: "マウリシオ・ポチェッティーノ", rating: 84, price: 320 },
    { name: "ルシアン・ファヴル", rating: 82, price: 250 }
];

const teamPkKickerMap = {
    "レアル・マドリード": "エンバペ",
    "マンチェスター・C": "ハーランド",
    "バルセロナ": "ラフィーニャ",
    "アーセナル": "サカ",
    "バイエルン": "ケイン",
    "ドルトムント": "ベンセバイニ",
    "チェルシー": "パーマー",
    "パリサンジェルマン": "デンベレ",
    "インテルナツィオナーレ・ミラノ": "チャルハノール",
    "ACミラン": "ラモス"
};

// フォーメーション定義
const formations = {
    "4-2-3-1": [
        { pos: "GK", category: "GK", x: 50, y: 88 },
        { pos: "LB", category: "DF", x: 18, y: 70 }, { pos: "CB", category: "DF", x: 38, y: 74 }, { pos: "CB", category: "DF", x: 62, y: 74 }, { pos: "RB", category: "DF", x: 82, y: 70 },
        { pos: "DMF", category: "MF", x: 38, y: 55 }, { pos: "CMF", category: "MF", x: 62, y: 55 },
        { pos: "LMF", category: "MF", x: 20, y: 34 }, { pos: "AMF", category: "MF", x: 50, y: 34 }, { pos: "RMF", category: "MF", x: 80, y: 34 },
        { pos: "CF", category: "FW", x: 50, y: 14 }
    ],
    "4-3-3": [
        { pos: "GK", category: "GK", x: 50, y: 88 },
        { pos: "LB", category: "DF", x: 18, y: 70 }, { pos: "CB", category: "DF", x: 38, y: 74 }, { pos: "CB", category: "DF", x: 62, y: 74 }, { pos: "RB", category: "DF", x: 82, y: 70 },
        { pos: "DMF", category: "MF", x: 50, y: 54 }, { pos: "CMF", category: "MF", x: 32, y: 42 }, { pos: "CMF", category: "MF", x: 68, y: 42 },
        { pos: "LWG", category: "FW", x: 20, y: 20 }, { pos: "CF", category: "FW", x: 50, y: 14 }, { pos: "RWG", category: "FW", x: 80, y: 20 }
    ],
    "4-4-2": [
        { pos: "GK", category: "GK", x: 50, y: 88 },
        { pos: "LB", category: "DF", x: 18, y: 70 }, { pos: "CB", category: "DF", x: 38, y: 74 }, { pos: "CB", category: "DF", x: 62, y: 74 }, { pos: "RB", category: "DF", x: 82, y: 70 },
        { pos: "LMF", category: "MF", x: 18, y: 45 }, { pos: "CMF", category: "MF", x: 38, y: 50 }, { pos: "CMF", category: "MF", x: 62, y: 50 }, { pos: "RMF", category: "MF", x: 82, y: 45 },
        { pos: "CF", category: "FW", x: 38, y: 16 }, { pos: "CF", category: "FW", x: 62, y: 16 }
    ],
    "3-5-2": [
        { pos: "GK", category: "GK", x: 50, y: 88 },
        { pos: "CB", category: "DF", x: 25, y: 74 }, { pos: "CB", category: "DF", x: 50, y: 76 }, { pos: "CB", category: "DF", x: 75, y: 74 },
        { pos: "LWB", category: "DF", x: 12, y: 48 }, { pos: "DMF", category: "MF", x: 38, y: 56 }, { pos: "CMF", category: "MF", x: 62, y: 56 }, { pos: "RWB", category: "DF", x: 88, y: 48 },
        { pos: "AMF", category: "MF", x: 50, y: 36 },
        { pos: "CF", category: "FW", x: 38, y: 16 }, { pos: "CF", category: "FW", x: 62, y: 16 }
    ],
    "3-4-3": [
        { pos: "GK", category: "GK", x: 50, y: 88 },
        { pos: "CB", category: "DF", x: 25, y: 74 }, { pos: "CB", category: "DF", x: 50, y: 76 }, { pos: "CB", category: "DF", x: 75, y: 74 },
        { pos: "LMF", category: "MF", x: 15, y: 48 }, { pos: "CMF", category: "MF", x: 38, y: 50 }, { pos: "CMF", category: "MF", x: 62, y: 50 }, { pos: "RMF", category: "MF", x: 85, y: 48 },
        { pos: "LWG", category: "FW", x: 22, y: 20 }, { pos: "CF", category: "FW", x: 50, y: 14 }, { pos: "RWG", category: "FW", x: 78, y: 20 }
    ],
    "4-1-4-1": [
        { pos: "GK", category: "GK", x: 50, y: 88 },
        { pos: "LB", category: "DF", x: 18, y: 70 }, { pos: "CB", category: "DF", x: 38, y: 74 }, { pos: "CB", category: "DF", x: 62, y: 74 }, { pos: "RB", category: "DF", x: 82, y: 70 },
        { pos: "DMF", category: "MF", x: 50, y: 58 },
        { pos: "LMF", category: "MF", x: 18, y: 38 }, { pos: "CMF", category: "MF", x: 38, y: 40 }, { pos: "CMF", category: "MF", x: 62, y: 40 }, { pos: "RMF", category: "MF", x: 82, y: 38 },
        { pos: "CF", category: "FW", x: 50, y: 14 }
    ],
    "4-3-2-1": [
        { pos: "GK", category: "GK", x: 50, y: 88 },
        { pos: "LB", category: "DF", x: 18, y: 70 }, { pos: "CB", category: "DF", x: 38, y: 74 }, { pos: "CB", category: "DF", x: 62, y: 74 }, { pos: "RB", category: "DF", x: 82, y: 70 },
        { pos: "CMF", category: "MF", x: 28, y: 54 }, { pos: "DMF", category: "MF", x: 50, y: 56 }, { pos: "CMF", category: "MF", x: 72, y: 54 },
        { pos: "AMF", category: "MF", x: 36, y: 32 }, { pos: "AMF", category: "MF", x: 64, y: 32 },
        { pos: "CF", category: "FW", x: 50, y: 14 }
    ],
    "5-3-2": [
        { pos: "GK", category: "GK", x: 50, y: 88 },
        { pos: "LWB", category: "DF", x: 12, y: 64 }, { pos: "CB", category: "DF", x: 30, y: 74 }, { pos: "CB", category: "DF", x: 50, y: 76 }, { pos: "CB", category: "DF", x: 70, y: 74 }, { pos: "RWB", category: "DF", x: 88, y: 64 },
        { pos: "CMF", category: "MF", x: 30, y: 46 }, { pos: "DMF", category: "MF", x: 50, y: 50 }, { pos: "CMF", category: "MF", x: 70, y: 46 },
        { pos: "CF", category: "FW", x: 38, y: 18 }, { pos: "CF", category: "FW", x: 62, y: 18 }
    ]
};

// 移籍市場データ（現役 ＋ 引退済みレジェンド選手を追加）
const defaultTransferMarket = [
    // === 👑 LEGEND PLAYERS (各ポジション 5名以上) ===
    // --- FW Legend ---
    { nat: "🇧🇷", name: "ペレ", pos: "CF", altPos: ["AMF", "SS"], category: "FW", rating: 98, price: 4800, isLegend: true },
    { nat: "🇦🇷", name: "マラドーナ", pos: "AMF", altPos: ["CF", "RWG"], category: "FW", rating: 97, price: 4500, isLegend: true },
    { nat: "🇵🇹", name: "C.ロナウド", pos: "CF", altPos: ["RWG", "LWG"], category: "FW", rating: 97, price: 4500, isLegend: true },
    { nat: "🇳🇱", name: "クライフ", pos: "CF", altPos: ["AMF", "LWG"], category: "FW", rating: 96, price: 4200, isLegend: true },
    { nat: "🇦🇷", name: "メッシ", pos: "RWG", altPos: ["AMF", "CF"], category: "FW", rating: 96, price: 4200, isLegend: true },
    { nat: "🇧🇷", name: "ロナウド", pos: "CF", altPos: [], category: "FW", rating: 96, price: 4200, isLegend: true },
    { nat: "🇮🇹", name: "デル・ピエロ", pos: "CF", altPos: [], category: "FW", rating: 96, price: 4200, isLegend: true },
    { nat: "🇧🇷", name: "ロナウジーニョ", pos: "LWG", altPos: ["AMF", "LMF"], category: "FW", rating: 95, price: 3800, isLegend: true },
    { nat: "🇫🇷", name: "ベンゼマ", pos: "CF", altPos: [], category: "FW", rating: 95, price: 3800, isLegend: true },
    { nat: "🇫🇷", name: "アンリ", pos: "CF", altPos: ["LWG"], category: "FW", rating: 94, price: 3500, isLegend: true },
    { nat: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "ベイル", pos: "RWG", altPos: ["CF", "LB"], category: "FW", rating: 94, price: 3500, isLegend: true },

    // --- MF Legend ---
    { nat: "🇫🇷", name: "ジダン", pos: "AMF", altPos: ["CMF"], category: "MF", rating: 97, price: 4400, isLegend: true },
    { nat: "🇫🇷", name: "プラティニ", pos: "AMF", altPos: ["CMF"], category: "MF", rating: 95, price: 3800, isLegend: true },
    { nat: "🇳🇱", name: "フリット", pos: "CMF", altPos: ["AMF", "CF", "CB"], category: "MF", rating: 95, price: 3900, isLegend: true },
    { nat: "🇩🇪", name: "クロース", pos: "CMF", altPos: ["DMF"], category: "MF", rating: 95, price: 3800, isLegend: true },
    { nat: "🇪🇸", name: "シャビ", pos: "CMF", altPos: ["DMF"], category: "MF", rating: 94, price: 3500, isLegend: true },
    { nat: "🇧🇷", name: "カゼミロ", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 94, price: 3500, isLegend: true },
    { nat: "🇪🇸", name: "イニエスタ", pos: "CMF", altPos: ["AMF", "LMF"], category: "MF", rating: 94, price: 3500, isLegend: true },
    { nat: "🇮🇹", name: "ピルロ", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 93, price: 3200, isLegend: true },

    // --- DF Legend ---
    { nat: "🇮🇹", name: "マルディーニ", pos: "CB", altPos: ["LB"], category: "DF", rating: 97, price: 4300, isLegend: true },
    { nat: "🇩🇪", name: "ベッケンバウアー", pos: "CB", altPos: ["DMF"], category: "DF", rating: 97, price: 4400, isLegend: true },
    { nat: "🇵🇹", name: "ペペ", pos: "CB", altPos: [], category: "DF", rating: 96, price: 4000, isLegend: true },
    { nat: "🇮🇹", name: "バレージ", pos: "CB", altPos: [], category: "DF", rating: 95, price: 3700, isLegend: true },
    { nat: "🇪🇸", name: "セルヒオ・ラモス", pos: "CB", altPos: ["RB"], category: "DF", rating: 95, price: 3700, isLegend: true },
    { nat: "🇧🇷", name: "マルセロ", pos: "LB", altPos: ["LWB", "LMF"], category: "DF", rating: 94, price: 3500, isLegend: true },
    { nat: "🇮🇹", name: "ネスタ", pos: "CB", altPos: [], category: "DF", rating: 94, price: 3400, isLegend: true },
    { nat: "🇮🇹", name: "カンナヴァーロ", pos: "CB", altPos: [], category: "DF", rating: 93, price: 3200, isLegend: true },
    { nat: "🇫🇷", name: "デサイー", pos: "CB", altPos: ["LB"], category: "DF", rating: 93, price: 3200, isLegend: true },

    // --- GK Legend ---
    { nat: "🇷🇺", name: "ヤシン", pos: "GK", altPos: [], category: "GK", rating: 96, price: 3800, isLegend: true },
    { nat: "🇮🇹", name: "ブッフォン", pos: "GK", altPos: [], category: "GK", rating: 95, price: 3500, isLegend: true },
    { nat: "🇨🇿", name: "チェフ", pos: "GK", altPos: [], category: "GK", rating: 95, price: 3500, isLegend: true },
    { nat: "🇩🇪", name: "カーン", pos: "GK", altPos: [], category: "GK", rating: 94, price: 3300, isLegend: true },
    { nat: "🇪🇸", name: "カシージャス", pos: "GK", altPos: [], category: "GK", rating: 94, price: 3300, isLegend: true },
    { nat: "🇩🇰", name: "シュマイケル", pos: "GK", altPos: [], category: "GK", rating: 93, price: 3100, isLegend: true },

    // === ⚽ CURRENT PLAYERS ===
    // --- FW (16名) ---
    { nat: "🇫🇷", name: "エンバペ", pos: "CF", altPos: ["LWG", "RWG"], category: "FW", rating: 92, price: 2600 },
    { nat: "🇳🇴", name: "ハーランド", pos: "CF", altPos: [], category: "FW", rating: 92, price: 2600 },
    { nat: "🇧🇷", name: "ヴィニシウス", pos: "LWG", altPos: ["LMF", "CF"], category: "FW", rating: 91, price: 2400 },
    { nat: "🇬🇪", name: "クヴァラツヘリア", pos: "LWG", altPos: ["LMF", "CF"], category: "FW", rating: 91, price: 2400 },
    { nat: "🇪🇸", name: "ヤマル", pos: "RWG", altPos: ["AMF", "RMF"], category: "FW", rating: 91, price: 2500 },
    { nat: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "ケイン", pos: "CF", altPos: ["AMF"], category: "FW", rating: 91, price: 2200 },
    { nat: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "サカ", pos: "RWG", altPos: ["RMF", "LWG", "LMF" ,"LB"], category: "FW", rating: 90, price: 2100 },
    { nat: "🇪🇬", name: "サラー", pos: "RWG", altPos: ["CF", "RMF"], category: "FW", rating: 89, price: 1900 },
    { nat: "🇳🇬", name: "オシムヘン", pos: "CF", altPos: [], category: "FW", rating: 88, price: 1800 },
    { nat: "🇦🇷", name: "アルバレス", pos: "CF", altPos: ["AMF"], category: "FW", rating: 87, price: 1700 },
    { nat: "🇸🇪", name: "イサク", pos: "CF", altPos: [], category: "FW", rating: 86, price: 1600 },
    { nat: "🇰🇷", name: "ソンフンミン", pos: "LWG", altPos: ["CF", "LMF"], category: "FW", rating: 86, price: 1400 },
    { nat: "🇯🇵", name: "三笘薫", pos: "LWG", altPos: ["LMF"], category: "FW", rating: 83, price: 1200 },
    { nat: "🇧🇷", name: "エンドリッキ", pos: "CF", altPos: ["RWG"], category: "FW", rating: 82, price: 1100 },
    { nat: "🇧🇷", name: "エステヴァン", pos: "RWG", altPos: ["AMF", "LWG"], category: "FW", rating: 81, price: 1000 },

    // --- MF (16名) ---
    { nat: "🇪🇸", name: "ロドリ", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 91, price: 2400 },
    { nat: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "ベリンガム", pos: "AMF", altPos: ["CMF", "CF"], category: "MF", rating: 91, price: 2500 },
    { nat: "🇩🇪", name: "ムシアラ", pos: "AMF", altPos: ["LMF", "LWG", "CMF"], category: "MF", rating: 90, price: 2300 },
    { nat: "🇩🇪", name: "ヴィルツ", pos: "AMF", altPos: ["LMF", "RWG", "CMF"], category: "MF", rating: 90, price: 2300 },
    { nat: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "パーマー", pos: "AMF", altPos: ["RMF", "RWG"], category: "MF", rating: 90, price: 2100 },
    { nat: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "ライス", pos: "DMF", altPos: ["CMF", "CB"], category: "MF", rating: 90, price: 2100 },
    { nat: "🇧🇪", name: "デ・ブライネ", pos: "AMF", altPos: ["CMF"], category: "MF", rating: 89, price: 1900 },
    { nat: "🇪🇸", name: "ペドリ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 88, price: 1800 },
    { nat: "🇵🇹", name: "ブルーノ", pos: "AMF", altPos: ["CMF"], category: "MF", rating: 87, price: 1600 },
    { nat: "🇦🇷", name: "マクアリスター", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 86, price: 1500 },
    { nat: "🇹🇷", name: "ギュレル", pos: "AMF", altPos: ["RMF", "RWG"], category: "MF", rating: 88, price: 1300 },
    { nat: "🇯🇵", name: "久保建英", pos: "RMF", altPos: ["RWG", "AMF"], category: "MF", rating: 84, price: 1300 },
    { nat: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "メイヌー", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 83, price: 1200 },
    { nat: "🇭🇷", name: "モドリッチ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 83, price: 700 },
    { nat: "🇯🇵", name: "遠藤航", pos: "DMF", altPos: ["CB"], category: "MF", rating: 80, price: 700 },
    { nat: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "ヌワネリ", pos: "AMF", altPos: ["RMF", "CMF"], category: "MF", rating: 80, price: 900 },

    // --- DF (15名) ---
    { nat: "🇳🇱", name: "ファン・ダイク", pos: "CB", altPos: [], category: "DF", rating: 90, price: 2100 },
    { nat: "🇺🇾", name: "アラウホ", pos: "CB", altPos: [], category: "DF", rating: 90, price: 2100 },
    { nat: "🇫🇷", name: "サリバ", pos: "CB", altPos: [], category: "DF", rating: 89, price: 2000 },
    { nat: "🇵🇹", name: "ルベン・ディアス", pos: "CB", altPos: [], category: "DF", rating: 88, price: 1800 },
    { nat: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "トレント", pos: "RB", altPos: ["RWB", "CMF"], category: "DF", rating: 87, price: 1700 },
    { nat: "🇲🇦", name: "ハキミ", pos: "RB", altPos: ["RWB", "RMF"], category: "DF", rating: 87, price: 1600 },
    { nat: "🇪🇸", name: "グリマルド", pos: "LB", altPos: ["LWB", "LMF"], category: "DF", rating: 86, price: 1500 },
    { nat: "🇭🇷", name: "グヴァルディオル", pos: "CB", altPos: ["LB"], category: "DF", rating: 86, price: 1600 },
    { nat: "🇧🇷", name: "ブレーメル", pos: "CB", altPos: [], category: "DF", rating: 85, price: 1400 },
    { nat: "🇨🇦", name: "デイヴィス", pos: "LB", altPos: ["LWB", "LMF"], category: "DF", rating: 85, price: 1400 },
    { nat: "🇪🇸", name: "クバルシ", pos: "CB", altPos: [], category: "DF", rating: 85, price: 1500 },
    { nat: "🇪🇸", name: "カルバハル", pos: "RB", altPos: ["RWB"], category: "DF", rating: 84, price: 950 },
    { nat: "🇳🇱", name: "ドゥンフリース", pos: "RB", altPos: ["RWB", "RMF"], category: "DF", rating: 83, price: 1100 },
    { nat: "🇯🇵", name: "冨安健洋", pos: "CB", altPos: ["RB", "LB"], category: "DF", rating: 81, price: 900 },
    { nat: "🇳🇱", name: "ハト", pos: "LB", altPos: ["CB"], category: "DF", rating: 82, price: 1100 },

    // --- GK (10名) ---
    { nat: "🇧🇪", name: "クルトワ", pos: "GK", altPos: [], category: "GK", rating: 90, price: 2100 },
    { nat: "🇩🇪", name: "ノイアー", pos: "GK", altPos: [], category: "GK", rating: 90, price: 2100 },
    { nat: "🇧🇷", name: "アリソン", pos: "GK", altPos: [], category: "GK", rating: 89, price: 1900 },
    { nat: "🇮🇹", name: "ドンナルンマ", pos: "GK", altPos: [], category: "GK", rating: 89, price: 1900 },
    { nat: "🇸🇮", name: "オブラク", pos: "GK", altPos: [], category: "GK", rating: 88, price: 1700 },
    { nat: "🇦🇷", name: "E.マルティネス", pos: "GK", altPos: [], category: "GK", rating: 88, price: 1700 },
    { nat: "🇪🇸", name: "ラヤ", pos: "GK", altPos: [], category: "GK", rating: 87, price: 1500 },
    { nat: "🇫🇷", name: "メニャン", pos: "GK", altPos: [], category: "GK", rating: 87, price: 1500 },
    { nat: "🇨🇭", name: "ゾマー", pos: "GK", altPos: [], category: "GK", rating: 85, price: 1000 },
    { nat: "🇫🇷", name: "シュヴァリエ", pos: "GK", altPos: [], category: "GK", rating: 84, price: 1000 },
    { nat: "🇯🇵", name: "鈴木彩艶", pos: "GK", altPos: [], category: "GK", rating: 80, price: 750 }
];
