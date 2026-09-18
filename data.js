// 搭載10クラブの選手データ（26-27シーズン版）
const clubPresetData = {
    "レアル・マドリード": [
        { name: "クルトワ", pos: "GK", altPos: [], category: "GK", rating: 90 },
        { name: "ククレジャ", pos: "LB", altPos: ["LWB"], category: "DF", rating: 83 },
        { name: "ミリトン", pos: "CB", altPos: ["RB"], category: "DF", rating: 85 },
        { name: "ハイセン", pos: "CB", altPos: ["DMF"], category: "DF", rating: 86 },
        { name: "トレント", pos: "RB", altPos: ["RWB", "CMF"], category: "DF", rating: 87 },
        { name: "チュアメニ", pos: "DMF", altPos: ["CB", "CMF"], category: "MF", rating: 86 },
        { name: "バルベルデ", pos: "CMF", altPos: ["RMF", "RWG", "RB"], category: "MF", rating: 89 },
        { name: "ヴィニシウス", pos: "LWG", altPos: ["LMF", "CF"], category: "FW", rating: 91 },
        { name: "ベリンガム", pos: "AMF", altPos: ["CMF", "CF"], category: "MF", rating: 90 },
        { name: "ロドリゴ", pos: "RWG", altPos: ["LWG", "CF", "RMF"], category: "FW", rating: 87 },
        { name: "エンバペ", pos: "CF", altPos: ["LWG", "RWG"], category: "FW", rating: 92 },
        { name: "カマヴィンガ", pos: "CMF", altPos: ["DMF", "LB"], category: "MF", rating: 85 },
        { name: "ギュレル", pos: "AMF", altPos: ["RMF", "RWG", "CMF"], category: "MF", rating: 84 },
        { name: "ブラヒム", pos: "RMF", altPos: ["AMF", "RWG", "LWG"], category: "MF", rating: 83 },
        { name: "C.エスピ", pos: "CF", altPos: [], category: "FW", rating: 80 },
        { name: "ディオマンデ", pos: "RWG", altPos: ["LWG", "CF"], category: "FW", rating: 82 }
    ],

    "マンチェスター・C": [
        { name: "ドンナルンマ", pos: "GK", altPos: [], category: "GK", rating: 90 },
        { name: "フサノフ", pos: "CB", altPos: ["RB"], category: "DF", rating: 84 },
        { name: "ルベン・ディアス", pos: "CB", altPos: [], category: "DF", rating: 88 },
        { name: "グヴァルディオル", pos: "CB", altPos: ["LB"], category: "DF", rating: 86 },
        { name: "グエイ", pos: "CB", altPos: ["RB"], category: "DF", rating: 84 },
        { name: "コヴァチッチ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 83 },
        { name: "シェルキ", pos: "AMF", altPos: ["RMF", "RWG", "CMF"], category: "MF", rating: 88 },
        { name: "アンダーソン", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 82 },
        { name: "エンソ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 85 },
        { name: "フォーデン", pos: "AMF", altPos: ["RMF", "RWG", "CMF", "LWG"], category: "MF", rating: 89 },
        { name: "ハーランド", pos: "CF", altPos: [], category: "FW", rating: 92 },
        { name: "ドク", pos: "LWG", altPos: ["RWG", "RMF", "LMF"], category: "FW", rating: 84 },
        { name: "セメンヨ", pos: "RWG", altPos: ["LWG", "CF"], category: "FW", rating: 82 },
        { name: "エンディアイエ", pos: "CF", altPos: ["LWG", "RWG", "AMF"], category: "FW", rating: 82 },
        { name: "オライリー", pos: "CMF", altPos: ["LB"], category: "MF", rating: 82 },
        { name: "ブアディ", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 80 }
    ],

    "バルセロナ": [
        { name: "ジョアン・ガルシア", pos: "GK", altPos: [], category: "GK", rating: 84 },
        { name: "バルデ", pos: "LB", altPos: ["LWB"], category: "DF", rating: 83 },
        { name: "クバルシ", pos: "CB", altPos: [], category: "DF", rating: 84 },
        { name: "クリステンセン", pos: "CB", altPos: ["DMF"], category: "DF", rating: 82 },
        { name: "クンデ", pos: "RB", altPos: ["CB", "RWB"], category: "DF", rating: 86 },
        { name: "カンセロ", pos: "RB", altPos: ["LB", "RWB", "RMF"], category: "DF", rating: 84 },
        { name: "ロドリ", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 91 },
        { name: "ペドリ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 88 },
        { name: "ガビ", pos: "CMF", altPos: ["DMF", "AMF", "LMF"], category: "MF", rating: 85 },
        { name: "オルモ", pos: "AMF", altPos: ["CMF", "LMF", "LWG"], category: "MF", rating: 86 },
        { name: "ヤマル", pos: "RWG", altPos: ["AMF", "RMF"], category: "FW", rating: 91 },
        { name: "ラフィーニャ", pos: "LWG", altPos: ["RWG", "LMF", "RMF"], category: "FW", rating: 88 },
        { name: "ガブリエウ・ジェズス", pos: "CF", altPos: ["LWG", "RWG"], category: "FW", rating: 83 },
        { name: "アデイェミ", pos: "LWG", altPos: ["CF", "RWG"], category: "FW", rating: 83 },
        { name: "アンソニー・ゴードン", pos: "LWG", altPos: ["LMF", "RWG"], category: "FW", rating: 82 },
        { name: "フェルミン", pos: "AMF", altPos: ["CMF", "LMF"], category: "MF", rating: 82 }
    ],

    "アーセナル": [
        { name: "ラヤ", pos: "GK", altPos: [], category: "GK", rating: 87 },
        { name: "カラフィオーリ", pos: "LB", altPos: ["CB", "LWB"], category: "DF", rating: 83 },
        { name: "サリバ", pos: "CB", altPos: [], category: "DF", rating: 89 },
        { name: "ガブリエウ", pos: "CB", altPos: [], category: "DF", rating: 87 },
        { name: "ホワイト", pos: "RB", altPos: ["CB", "RWB"], category: "DF", rating: 84 },
        { name: "ティンバー", pos: "RB", altPos: ["LB", "CB", "RWB"], category: "DF", rating: 84 },
        { name: "コンサ", pos: "CB", altPos: ["RB"], category: "DF", rating: 84 },
        { name: "ライス", pos: "DMF", altPos: ["CMF", "CB"], category: "MF", rating: 90 },
        { name: "ウーデゴール", pos: "AMF", altPos: ["CMF", "RMF"], category: "MF", rating: 91 },
        { name: "ブルーノ・ギマランイス", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 87 },
        { name: "スビメンディ", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 85 },
        { name: "サカ", pos: "RWG", altPos: ["RMF", "LWG", "RWB"], category: "FW", rating: 89 },
        { name: "マドゥエケ", pos: "RWG", altPos: ["LMF", "RMF", "LWG"], category: "FW", rating: 83 },
        { name: "ハヴァーツ", pos: "CF", altPos: ["AMF", "CMF"], category: "FW", rating: 85 },
        { name: "エゼ", pos: "AMF", altPos: ["LWG", "LMF", "CMF"], category: "MF", rating: 85 },
        { name: "メリーノ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 83 }
    ],

    "バイエルン": [
        { name: "ノイアー", pos: "GK", altPos: [], category: "GK", rating: 86 },
        { name: "デイヴィス", pos: "LB", altPos: ["LWB", "LMF"], category: "DF", rating: 85 },
        { name: "ウパメカノ", pos: "CB", altPos: [], category: "DF", rating: 84 },
        { name: "キム・ミンジェ", pos: "CB", altPos: [], category: "DF", rating: 83 },
        { name: "ター", pos: "CB", altPos: [], category: "DF", rating: 84 },
        { name: "伊藤洋輝", pos: "CB", altPos: ["LB", "LWB"], category: "DF", rating: 81 },
        { name: "ブイ", pos: "RB", altPos: ["RWB"], category: "DF", rating: 80 },
        { name: "ライマー", pos: "RB", altPos: ["RWB", "DMF", "CMF"], category: "DF", rating: 81 },
        { name: "キミッヒ", pos: "DMF", altPos: ["CMF", "RB", "RWB"], category: "MF", rating: 88 },
        { name: "ムシアラ", pos: "AMF", altPos: ["LMF", "LWG", "CMF"], category: "MF", rating: 90 },
        { name: "ビショフ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 81 },
        { name: "サイバリ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 83 },
        { name: "パヴロヴィッチ", pos: "CMF", altPos: ["DMF"], category: "MF", rating: 82 },
        { name: "ニャブリ", pos: "RWG", altPos: ["LWG", "CF"], category: "FW", rating: 83 },
        { name: "ルイス・ディアス", pos: "LWG", altPos: ["LMF", "RWG"], category: "FW", rating: 87 },
        { name: "オリーセ", pos: "RWG", altPos: ["RMF", "AMF"], category: "FW", rating: 90 },
        { name: "ケイン", pos: "CF", altPos: ["AMF"], category: "FW", rating: 91 }
    ],

    "ドルトムント": [
        { name: "コベル", pos: "GK", altPos: [], category: "GK", rating: 87 },
        { name: "アントン", pos: "CB", altPos: ["RB"], category: "DF", rating: 82 },
        { name: "シュロッターベック", pos: "CB", altPos: ["LB"], category: "DF", rating: 90 },
        { name: "ベンセバイニ", pos: "LB", altPos: ["CB", "LWB"], category: "DF", rating: 81 },
        { name: "リエルソン", pos: "RB", altPos: ["RWB", "LB"], category: "DF", rating: 81 },
        { name: "スヴェンソン", pos: "LB", altPos: ["LWB", "LMF"], category: "DF", rating: 80 },
        { name: "ジョーブ・ベリンガム", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 85 },
        { name: "ヌメチャ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 81 },
        { name: "ヴェールマン", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 82 },
        { name: "チュクエメカ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 80 },
        { name: "ヌワネリ", pos: "AMF", altPos: ["RMF", "CMF"], category: "MF", rating: 79 },
        { name: "カレツァス", pos: "AMF", altPos: ["RMF", "CMF"], category: "MF", rating: 78 },
        { name: "ザビッツァー", pos: "CMF", altPos: ["RMF", "AMF", "DMF"], category: "MF", rating: 82 },
        { name: "ギラシ", pos: "CF", altPos: [], category: "FW", rating: 86 },
        { name: "バイアー", pos: "CF", altPos: ["LWG", "RWG"], category: "FW", rating: 80 },
        { name: "ファビオ・シルヴァ", pos: "CF", altPos: ["LWG"], category: "FW", rating: 82 }
    ],    
    "チェルシー": [
        { name: "エミリアーノ・マルティネス", pos: "GK", altPos: [], category: "GK", rating: 88 },
        { name: "ペンダース", pos: "GK", altPos: [], category: "GK", rating: 79 },
        { name: "ラクロワ", pos: "CB", altPos: [], category: "DF", rating: 82 },
        { name: "コルウィル", pos: "CB", altPos: ["LB"], category: "DF", rating: 82 },
        { name: "ハト", pos: "LB", altPos: ["CB"], category: "DF", rating: 82 },
        { name: "ジェームズ", pos: "RB", altPos: ["RWB", "CB", "DMF"], category: "DF", rating: 84 },
        { name: "フォファナ", pos: "CB", altPos: ["RB"], category: "DF", rating: 81 },
        { name: "ギュスト", pos: "RB", altPos: ["RWB", "LB"], category: "DF", rating: 81 },
        { name: "パーマー", pos: "AMF", altPos: ["RMF", "RWG", "CMF"], category: "MF", rating: 90 },
        { name: "カイセド", pos: "DMF", altPos: ["CMF", "RB"], category: "MF", rating: 88 },
        { name: "ラヴィア", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 80 },
        { name: "ロジャーズ", pos: "AMF", altPos: ["LWG", "RWG", "CMF"], category: "MF", rating: 87 },
        { name: "ヘンダーソン", pos: "CMF", altPos: ["DMF"], category: "MF", rating: 81 },
        { name: "ペドロ・ネト", pos: "RWG", altPos: ["LWG", "RMF"], category: "FW", rating: 83 },
        { name: "ジョアン・ペドロ", pos: "CF", altPos: ["AMF"], category: "FW", rating: 87 },
        { name: "ギッテンス", pos: "LWG", altPos: ["RWG", "LMF"], category: "FW", rating: 82 },
        { name: "エステヴァン", pos: "RWG", altPos: ["AMF", "LWG"], category: "FW", rating: 81 }
    ],

    "パリサンジェルマン": [
        { name: "シュヴァリエ", pos: "GK", altPos: [], category: "GK", rating: 84 },
        { name: "サフォノフ", pos: "GK", altPos: [], category: "GK", rating: 79 },
        { name: "ハキミ", pos: "RB", altPos: ["RWB", "RMF"], category: "DF", rating: 87 },
        { name: "ベラウド", pos: "CB", altPos: ["LB"], category: "DF", rating: 80 },
        { name: "マルキーニョス", pos: "CB", altPos: ["RB", "DMF"], category: "DF", rating: 86 },
        { name: "ザバルニー", pos: "CB", altPos: [], category: "DF", rating: 82 },
        { name: "ディーニュ", pos: "LB", altPos: ["LWB"], category: "DF", rating: 80 },
        { name: "メンデス", pos: "LB", altPos: ["LWB"], category: "DF", rating: 85 },
        { name: "ヴィティーニャ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 89 },
        { name: "ファビアン・ルイス", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 85 },
        { name: "ザイール＝エメリ", pos: "CMF", altPos: ["DMF", "RB"], category: "MF", rating: 83 },
        { name: "ジョアン・ネヴェス", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 84 },
        { name: "デンベレ", pos: "RWG", altPos: ["LWG", "CF", "RMF"], category: "FW", rating: 91 },
        { name: "クヴァラツヘリア", pos: "LWG", altPos: ["LMF", "CF"], category: "FW", rating: 90 },
        { name: "ドゥエ", pos: "LWG", altPos: ["AMF", "RWG"], category: "FW", rating: 87 },
        { name: "アクリウシュ", pos: "RWG", altPos: ["AMF", "LWG"], category: "FW", rating: 82 },
        { name: "フェラン", pos: "CF", altPos: ["RWG", "LWG"], category: "FW", rating: 82 }
    ],

    "インテルナツィオナーレ・ミラノ": [
        { name: "ジョゼップ・マルティネス", pos: "GK", altPos: [], category: "GK", rating: 82 },
        { name: "ビセック", pos: "CB", altPos: ["RB"], category: "DF", rating: 80 },
        { name: "アカンジ", pos: "CB", altPos: ["RB", "DMF"], category: "DF", rating: 84 },
        { name: "バストーニ", pos: "CB", altPos: ["LB"], category: "DF", rating: 90 },
        { name: "ディウフ", pos: "RWB", altPos: ["RMF", "RB"], category: "DF", rating: 80 },
        { name: "バレッラ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 88 },
        { name: "ジエリンスキ", pos: "CMF", altPos: ["AMF"], category: "MF", rating: 82 },
        { name: "スチッチ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 81 },
        { name: "ディマルコ", pos: "LWB", altPos: ["LB", "LMF"], category: "DF", rating: 90 },
        { name: "エスポジト", pos: "CF", altPos: ["SS", "LWG"], category: "FW", rating: 81 },
        { name: "ラウタロ", pos: "CF", altPos: [], category: "FW", rating: 89 },
        { name: "テュラム", pos: "CF", altPos: ["LWG", "RWG"], category: "FW", rating: 86 },
        { name: "ルイス・エンリケ", pos: "RWG", altPos: ["RMF", "LWG"], category: "FW", rating: 81 },
        { name: "ボニー", pos: "CF", altPos: [], category: "FW", rating: 79 },
        { name: "チャルハノール", pos: "DMF", altPos: ["CMF", "AMF"], category: "MF", rating: 87 },
        { name: "ジョーンズ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 82 },
        { name: "ムヒタリアン", pos: "CMF", altPos: ["AMF", "LMF"], category: "MF", rating: 82 }
    ],

    "ACミラン": [
        { name: "メニャン", pos: "GK", altPos: [], category: "GK", rating: 88 },
        { name: "テラッチアーノ", pos: "GK", altPos: [], category: "GK", rating: 77 },
        { name: "エストゥピニャン", pos: "LB", altPos: ["LWB"], category: "DF", rating: 82 },
        { name: "デ・ヴィンター", pos: "CB", altPos: ["RB"], category: "DF", rating: 80 },
        { name: "トモリ", pos: "CB", altPos: [], category: "DF", rating: 83 },
        { name: "パヴロヴィッチ", pos: "CB", altPos: ["LB"], category: "DF", rating: 81 },
        { name: "バルテサーギ", pos: "LB", altPos: ["CB"], category: "DF", rating: 76 },
        { name: "ガッビア", pos: "CB", altPos: [], category: "DF", rating: 79 },
        { name: "モドリッチ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 84 },
        { name: "ロフタス＝チーク", pos: "CMF", altPos: ["AMF", "RMF"], category: "MF", rating: 81 },
        { name: "ラビオ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 84 },
        { name: "ヤシャリ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 80 },
        { name: "サレマーカーズ", pos: "RMF", altPos: ["RWG", "LMF"], category: "MF", rating: 80 },
        { name: "モレイラ", pos: "LWG", altPos: ["RWG", "AMF"], category: "FW", rating: 78 },
        { name: "ラモス", pos: "CF", altPos: ["AMF"], category: "FW", rating: 83 },
        { name: "プリシッチ", pos: "RWG", altPos: ["RMF", "LWG", "AMF"], category: "FW", rating: 90 },
        { name: "チュクウェゼ", pos: "RWG", altPos: ["RMF", "LWG"], category: "FW", rating: 80 }
    ],
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
    { nat: "🇵🇹", name: "C.ロナウド", pos: "CF", altPos: ["RWG", "LWG"], category: "FW", rating: 97, price: 4500 },
    { nat: "🇳🇱", name: "クライフ", pos: "CF", altPos: ["AMF", "LWG"], category: "FW", rating: 96, price: 4200, isLegend: true },
    { nat: "🇦🇷", name: "メッシ", pos: "RWG", altPos: ["AMF", "CF"], category: "FW", rating: 96, price: 4200 },
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
