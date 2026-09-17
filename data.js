// 搭載10クラブの選手データ（26-27シーズン版）
const clubPresetData = {
    "レアル・マドリード": [
        { name: "クルトワ", pos: "GK", altPos: [], category: "GK", rating: 90 },
        { name: "ククレジャ", pos: "LB", altPos: ["LWB"], category: "DF", rating: 83 },
        { name: "ミリトン", pos: "CB", altPos: ["RB"], category: "DF", rating: 85 },
        { name: "フイセン", pos: "CB", altPos: ["DMF"], category: "DF", rating: 86 },
        { name: "トレント", pos: "RB", altPos: ["RWB", "CMF"], category: "DF", rating: 87 },
        { name: "チュアメニ", pos: "DMF", altPos: ["CB", "CMF"], category: "MF", rating: 86 },
        { name: "バルベルデ", pos: "CMF", altPos: ["RMF", "RWG", "RB"], category: "MF", rating: 89 },
        { name: "ヴィニシウス", pos: "LWG", altPos: ["LMF", "CF"], category: "FW", rating: 91 },
        { name: "ベリンガム", pos: "AMF", altPos: ["CMF", "CF"], category: "MF", rating: 90 },
        { name: "ロドリゴ", pos: "RWG", altPos: ["LWG", "CF", "RMF"], category: "FW", rating: 87 },
        { name: "エンバペ", pos: "CF", altPos: ["LWG", "RWG"], category: "FW", rating: 92 },
        { name: "カマヴィンガ", pos: "CMF", altPos: ["DMF", "LB"], category: "MF", rating: 85 },
        { name: "ギュレル", pos: "AMF", altPos: ["RMF", "RWG", "CMF"], category: "MF", rating: 84 },
        { name: "ブラヒム", pos: "AMF", altPos: ["RMF", "RWG", "LWG"], category: "MF", rating: 83 },
        { name: "エンドリッキ", pos: "CF", altPos: ["RWG"], category: "FW", rating: 81 },
        { name: "C.エスピ", pos: "CF", altPos: [], category: "FW", rating: 79 },
        { name: "ディオマンデ", pos: "RWG", altPos: ["LWG", "CF"], category: "FW", rating: 82 }
    ],

    "マンチェスター・C": [
        { name: "ドンナルンマ", pos: "GK", altPos: [], category: "GK", rating: 89 },
        { name: "アイト＝ヌーリ", pos: "LB", altPos: ["LWB", "LMF"], category: "DF", rating: 84 },
        { name: "ルベン・ディアス", pos: "CB", altPos: [], category: "DF", rating: 88 },
        { name: "グヴァルディオル", pos: "CB", altPos: ["LB"], category: "DF", rating: 86 },
        { name: "グエイ", pos: "CB", altPos: ["RB"], category: "DF", rating: 84 },
        { name: "コヴァチッチ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 83 },
        { name: "シェルキ", pos: "AMF", altPos: ["RMF", "RWG", "CMF"], category: "MF", rating: 85 },
        { name: "アンダーソン", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 82 },
        { name: "エンソ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 85 },
        { name: "フォーデン", pos: "AMF", altPos: ["RMF", "RWG", "CMF", "LWG"], category: "MF", rating: 89 },
        { name: "ハーランド", pos: "CF", altPos: [], category: "FW", rating: 92 },
        { name: "ドク", pos: "LWG", altPos: ["RWG", "RMF", "LMF"], category: "FW", rating: 84 },
        { name: "ニャブリ", pos: "RWG", altPos: ["LWG", "CF"], category: "FW", rating: 82 },
        { name: "エンディアイエ", pos: "CF", altPos: ["LWG", "RWG", "AMF"], category: "FW", rating: 82 },
        { name: "セメニョ", pos: "RWG", altPos: ["CF", "LWG"], category: "FW", rating: 82 },
        { name: "アラン", pos: "RWG", altPos: ["LWG", "RMF"], category: "FW", rating: 78 }
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
        { name: "ライス", pos: "DMF", altPos: ["CMF", "CB"], category: "MF", rating: 89 },
        { name: "ウーデゴール", pos: "AMF", altPos: ["CMF", "RMF"], category: "MF", rating: 89 },
        { name: "ブルーノ・ギマランイス", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 87 },
        { name: "スビメンディ", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 85 },
        { name: "サカ", pos: "RWG", altPos: ["RMF", "LWG", "RWB"], category: "FW", rating: 89 },
        { name: "トロサール", pos: "LWG", altPos: ["LMF", "CF", "AMF"], category: "FW", rating: 83 },
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
        { name: "オリス", pos: "RWG", altPos: ["RMF", "AMF"], category: "FW", rating: 87 },
        { name: "ケイン", pos: "CF", altPos: ["AMF"], category: "FW", rating: 91 }
    ],

    "ドルトムント": [
        { name: "コーベル", pos: "GK", altPos: [], category: "GK", rating: 87 },
        { name: "アントン", pos: "CB", altPos: ["RB"], category: "DF", rating: 82 },
        { name: "シュロッターベック", pos: "CB", altPos: ["LB"], category: "DF", rating: 85 },
        { name: "ベンセバイニ", pos: "LB", altPos: ["CB", "LWB"], category: "DF", rating: 81 },
        { name: "リエルソン", pos: "RB", altPos: ["RWB", "LB"], category: "DF", rating: 81 },
        { name: "スヴェンソン", pos: "LB", altPos: ["LWB", "LMF"], category: "DF", rating: 80 },
        { name: "ジョーブ・ベリンガム", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 82 },
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
        { name: "パーマー", pos: "AMF", altPos: ["RMF", "RWG", "CMF"], category: "MF", rating: 88 },
        { name: "カイセド", pos: "DMF", altPos: ["CMF", "RB"], category: "MF", rating: 85 },
        { name: "ラヴィア", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 80 },
        { name: "ロジャーズ", pos: "AMF", altPos: ["LWG", "RWG", "CMF"], category: "MF", rating: 84 },
        { name: "ヘンダーソン", pos: "CMF", altPos: ["DMF"], category: "MF", rating: 78 },
        { name: "ペドロ・ネト", pos: "RWG", altPos: ["LWG", "RMF"], category: "FW", rating: 83 },
        { name: "ジョアン・ペドロ", pos: "CF", altPos: ["AMF"], category: "FW", rating: 83 },
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
        { name: "ディニュ", pos: "LB", altPos: ["LWB"], category: "DF", rating: 80 },
        { name: "メンデス", pos: "LB", altPos: ["LWB"], category: "DF", rating: 85 },
        { name: "ヴィティーニャ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 88 },
        { name: "ファビアン・ルイス", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 85 },
        { name: "ザイール＝エメリ", pos: "CMF", altPos: ["DMF", "RB"], category: "MF", rating: 83 },
        { name: "ジョアン・ネヴェス", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 84 },
        { name: "デンベレ", pos: "RWG", altPos: ["LWG", "CF", "RMF"], category: "FW", rating: 89 },
        { name: "クヴァラツヘリア", pos: "LWG", altPos: ["LMF", "RWG"], category: "FW", rating: 88 },
        { name: "ドゥエ", pos: "LWG", altPos: ["AMF", "RWG"], category: "FW", rating: 87 },
        { name: "アクリウシュ", pos: "RWG", altPos: ["AMF", "LWG"], category: "FW", rating: 82 },
        { name: "フェラン", pos: "CF", altPos: ["RWG", "LWG"], category: "FW", rating: 82 }
    ],

    "インテルナツィオナーレ・ミラノ": [
        { name: "ジョゼップ・マルティネス", pos: "GK", altPos: [], category: "GK", rating: 82 },
        { name: "ビセック", pos: "CB", altPos: ["RB"], category: "DF", rating: 80 },
        { name: "アカンジ", pos: "CB", altPos: ["RB", "DMF"], category: "DF", rating: 84 },
        { name: "バストーニ", pos: "CB", altPos: ["LB"], category: "DF", rating: 88 },
        { name: "ディウフ", pos: "RWB", altPos: ["RMF", "RB"], category: "DF", rating: 80 },
        { name: "バレッラ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 88 },
        { name: "ジエリンスキ", pos: "CMF", altPos: ["AMF"], category: "MF", rating: 82 },
        { name: "スチッチ", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 81 },
        { name: "ディマルコ", pos: "LWB", altPos: ["LB", "LMF"], category: "DF", rating: 86 },
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
        { name: "メニャン", pos: "GK", altPos: [], category: "GK", rating: 87 },
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
        { name: "プリシッチ", pos: "RWG", altPos: ["RMF", "LWG", "AMF"], category: "FW", rating: 85 },
        { name: "チュクウェゼ", pos: "RWG", altPos: ["RMF", "LWG"], category: "FW", rating: 80 }
    ],
}
const initialManagers = {
    "レアル・マドリード": { name: "モウリーニョ", rating: 91, price: 500 },
    "マンチェスター・C": { name: "マレスカ", rating: 86, price: 450 },
    "バルセロナ": { name: "フリック", rating: 87, price: 400 },
    "アーセナル": { name: "アルテタ", rating: 87, price: 350 },
    "バイエルン": { name: "コンパニ", rating: 83, price: 300 },
    "ドルトムント": { name: "コヴァチ", rating: 82, price: 250 },
    "チェルシー": { name: "マレスカ", rating: 84, price: 350 },
    "パリサンジェルマン": { name: "ルイス・エンリケ", rating: 86, price: 350 },
    "インテルナツィオナーレ・ミラノ": { name: "キヴ", rating: 84, price: 350 },
    "ACミラン": { name: "アモリム", rating: 83, price: 300 }
};

const freeManagers = [
    { name: "クロップ", rating: 91, price: 550 },
    { name: "ジダン", rating: 89, price: 450 },
    { name: "モウリーニョ", rating: 85, price: 350 },
    { name: "トゥヘル", rating: 86, price: 400 },
    { name: "シャビ", rating: 83, price: 300 },
    { name: "ポチェッティーノ", rating: 83, price: 300 }
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

// 2026-2027シーズン移籍市場フリー選手データ
const defaultTransferMarket = [
    // --- FW (10名) ---
    { nat: "🇪🇬", name: "サラー", pos: "RWG", altPos: ["CF", "RMF"], category: "FW", rating: 89, price: 2100 },
    { nat: "🇳🇬", name: "オシムヘン", pos: "CF", altPos: [], category: "FW", rating: 88, price: 2000 },
    { nat: "🇰🇷", name: "孫興民", pos: "LWG", altPos: ["CF", "LMF"], category: "FW", rating: 86, price: 1500 },
    { nat: "🇯🇵", name: "三笘薫", pos: "LWG", altPos: ["LMF"], category: "FW", rating: 83, price: 1200 },
    { nat: "🇸🇪", name: "イサク", pos: "CF", altPos: [], category: "FW", rating: 86, price: 1800 },
    { nat: "🇦 ARG", name: "アルバレス", pos: "CF", altPos: ["AMF"], category: "FW", rating: 87, price: 1900 },
    { nat: "🇵TU", name: "C.ロナウド", pos: "CF", altPos: [], category: "FW", rating: 85, price: 1000 },
    { nat: "🇦 ARG", name: "メッシ", pos: "RWG", altPos: ["AMF", "CF"], category: "FW", rating: 86, price: 1200 },
    { nat: "🇧 BRA", name: "ネイマール", pos: "LWG", altPos: ["AMF"], category: "FW", rating: 84, price: 1000 },
    { nat: "🇦 ARG", name: "ディバラ", pos: "CF", altPos: ["AMF", "RWG"], category: "FW", rating: 84, price: 1100 },

    // --- MF (10名) ---
    { nat: "🇪🇸", name: "ロドリ", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 90, price: 2200 },
    { nat: "🇵🇹", name: "B.シウバ", pos: "AMF", altPos: ["CMF", "RMF"], category: "MF", rating: 86, price: 1600 },
    { nat: "🇧🇪", name: "デ・ブライネ", pos: "AMF", altPos: ["CMF"], category: "MF", rating: 89, price: 2000 },
    { nat: "🇯🇵", name: "久保建英", pos: "RMF", altPos: ["RWG", "AMF"], category: "MF", rating: 84, price: 1400 },
    { nat: "🇵🇹", name: "B.フェルナンデス", pos: "AMF", altPos: ["CMF"], category: "MF", rating: 87, price: 1800 },
    { nat: "🇭🇷", name: "モドリッチ", pos: "CMF", altPos: ["AMF", "DMF"], category: "MF", rating: 82, price: 700 },
    { nat: "🇯🇵", name: "遠藤航", pos: "DMF", altPos: ["CB"], category: "MF", rating: 80, price: 750 },
    { nat: "🇦 ARG", name: "マック・アリスター", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 86, price: 1700 },
    { nat: "🇨🇭", name: "ジャカ", pos: "DMF", altPos: ["CMF"], category: "MF", rating: 84, price: 1200 },
    { nat: "🏴󠁧󠁢󠁥󠁮󠁧󠁢", name: "ギャラガー", pos: "CMF", altPos: ["DMF", "AMF"], category: "MF", rating: 82, price: 1100 },

    // --- DF (10名) ---
    { nat: "🇳🇱", name: "ファン・ダイク", pos: "CB", altPos: [], category: "DF", rating: 89, price: 2000 },
    { nat: "🇪🇸", name: "カルバハル", pos: "RB", altPos: ["RWB"], category: "DF", rating: 84, price: 1000 },
    { nat: "🇪🇸", name: "フラン・ガルシア", pos: "LB", altPos: ["LWB"], category: "DF", rating: 79, price: 700 },
    { nat: "🇪🇸", name: "グリマルド", pos: "LB", altPos: ["LWB", "LMF"], category: "DF", rating: 86, price: 1600 },
    { nat: "🇧 BRA", name: "ブレーメル", pos: "CB", altPos: [], category: "DF", rating: 85, price: 1500 },
    { nat: "🇯🇵", name: "冨安健洋", pos: "CB", altPos: ["RB", "LB"], category: "DF", rating: 81, price: 950 },
    { nat: "🇦 AUT", name: "アラバ", pos: "CB", altPos: ["LB", "DMF"], category: "DF", rating: 83, price: 1100 },
    { nat: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "ロバートソン", pos: "LB", altPos: ["LWB"], category: "DF", rating: 84, price: 1300 },
    { nat: "🇫🇷", name: "パヴァール", pos: "CB", altPos: ["RB"], category: "DF", rating: 85, price: 1400 },
    { nat: "🇳🇱", name: "ダンフリース", pos: "RB", altPos: ["RWB", "RMF"], category: "DF", rating: 83, price: 1200 },

    // --- GK (10名) ---
    { nat: "🇧 BRA", name: "アリソン", pos: "GK", altPos: [], category: "GK", rating: 89, price: 2000 },
    { nat: "🇸 SVN", name: "オブラク", pos: "GK", altPos: [], category: "GK", rating: 88, price: 1800 },
    { nat: "🇦 ARG", name: "E.マルティネス", pos: "GK", altPos: [], category: "GK", rating: 87, price: 1600 },
    { nat: "🇮🇹", name: "ドンナルンマ", pos: "GK", altPos: [], category: "GK", rating: 89, price: 2000 },
    { nat: "🇯🇵", name: "鈴木彩艶", pos: "GK", altPos: [], category: "GK", rating: 80, price: 800 },
    { nat: "🇪🇸", name: "ラヤ", pos: "GK", altPos: [], category: "GK", rating: 87, price: 1600 },
    { nat: "🇫🇷", name: "メニャン", pos: "GK", altPos: [], category: "GK", rating: 87, price: 1600 },
    { nat: "🇨🇭", name: "ゾマー", pos: "GK", altPos: [], category: "GK", rating: 85, price: 1100 },
    { nat: "🇩🇪", name: "テア・シュテーゲン", pos: "GK", altPos: [], category: "GK", rating: 87, price: 1500 },
    { nat: "🇬 GEO", name: "ママルダシュヴィリ", pos: "GK", altPos: [], category: "GK", rating: 85, price: 1300 }
];