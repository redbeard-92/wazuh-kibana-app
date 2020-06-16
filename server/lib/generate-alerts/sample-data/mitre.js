/*
 * Wazuh app - Mitre sample alerts
 * Copyright (C) 2015-2020 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

// Mitre
export const rule = [{
    "tactic": "Command and Control",
    "id": [
      "T1001",
      "T1008",
      "T1024",
      "T1026",
      "T1032",
      "T1043",
      "T1065",
      "T1071",
      "T1079",
      "T1090",
      "T1092",
      "T1094",
      "T1095",
      "T1102",
      "T1104",
      "T1105",
      "T1132",
      "T1172",
      "T1188",
      "T1205",
      "T1219",
      "T1483"
    ]
  },
  {
    "tactic": "Exfiltration",
    "id": [
      "T1002",
      "T1011",
      "T1020",
      "T1022",
      "T1029",
      "T1030",
      "T1041",
      "T1048",
      "T1052",
      "T1537"
    ]
  },
  {
    "tactic": "Credential Access",
    "id": [
      "T1003",
      "T1040",
      "T1056",
      "T1081",
      "T1098",
      "T1110",
      "T1111",
      "T1139",
      "T1141",
      "T1142",
      "T1145",
      "T1167",
      "T1171",
      "T1174",
      "T1179",
      "T1187",
      "T1208",
      "T1212",
      "T1214",
      "T1503",
      "T1522",
      "T1528",
      "T1539"
    ]
  },
  {
    "tactic": "Persistence",
    "id": [
      "T1004",
      "T1013",
      "T1015",
      "T1019",
      "T1023",
      "T1031",
      "T1034",
      "T1037",
      "T1038",
      "T1042",
      "T1044",
      "T1050",
      "T1053",
      "T1058",
      "T1060",
      "T1062",
      "T1067",
      "T1078",
      "T1084",
      "T1098",
      "T1100",
      "T1101",
      "T1103",
      "T1108",
      "T1109",
      "T1122",
      "T1128",
      "T1131",
      "T1133",
      "T1136",
      "T1137",
      "T1138",
      "T1150",
      "T1152",
      "T1154",
      "T1156",
      "T1157",
      "T1158",
      "T1159",
      "T1160",
      "T1161",
      "T1162",
      "T1163",
      "T1164",
      "T1165",
      "T1166",
      "T1168",
      "T1176",
      "T1177",
      "T1179",
      "T1180",
      "T1182",
      "T1183",
      "T1197",
      "T1198",
      "T1205",
      "T1209",
      "T1215",
      "T1501",
      "T1504",
      "T1505",
      "T1519",
      "T1525"
    ]
  },
  {
    "tactic": "Collection",
    "id": [
      "T1005",
      "T1025",
      "T1039",
      "T1056",
      "T1074",
      "T1113",
      "T1114",
      "T1115",
      "T1119",
      "T1123",
      "T1125",
      "T1185",
      "T1213",
      "T1530"
    ]
  },
  {
    "tactic": "Defense Evasion",
    "id": [
      "T1006",
      "T1009",
      "T1014",
      "T1027",
      "T1036",
      "T1038",
      "T1045",
      "T1054",
      "T1055",
      "T1064",
      "T1066",
      "T1070",
      "T1073",
      "T1078",
      "T1085",
      "T1088",
      "T1089",
      "T1090",
      "T1093",
      "T1096",
      "T1099",
      "T1102",
      "T1107",
      "T1108",
      "T1109",
      "T1112",
      "T1116",
      "T1117",
      "T1118",
      "T1121",
      "T1122",
      "T1126",
      "T1127",
      "T1130",
      "T1134",
      "T1140",
      "T1143",
      "T1144",
      "T1146",
      "T1147",
      "T1148",
      "T1149",
      "T1150",
      "T1151",
      "T1152",
      "T1158",
      "T1170",
      "T1181",
      "T1183",
      "T1186",
      "T1191",
      "T1196",
      "T1197",
      "T1198",
      "T1202",
      "T1205",
      "T1207",
      "T1211",
      "T1216",
      "T1218",
      "T1220",
      "T1221",
      "T1222",
      "T1223",
      "T1480",
      "T1484",
      "T1497",
      "T1500",
      "T1502",
      "T1506",
      "T1527",
      "T1535",
      "T1536"
    ]
  },
  {
    "tactic": "Discovery",
    "id": [
      "T1007",
      "T1010",
      "T1012",
      "T1016",
      "T1018",
      "T1033",
      "T1040",
      "T1046",
      "T1049",
      "T1057",
      "T1063",
      "T1069",
      "T1082",
      "T1083",
      "T1087",
      "T1120",
      "T1124",
      "T1135",
      "T1201",
      "T1217",
      "T1482",
      "T1497",
      "T1518",
      "T1526",
      "T1538"
    ]
  },
  {
    "tactic": "Privilege Escalation",
    "id": [
      "T1013",
      "T1015",
      "T1034",
      "T1038",
      "T1044",
      "T1050",
      "T1053",
      "T1055",
      "T1058",
      "T1068",
      "T1078",
      "T1088",
      "T1100",
      "T1103",
      "T1134",
      "T1138",
      "T1150",
      "T1157",
      "T1160",
      "T1165",
      "T1166",
      "T1169",
      "T1178",
      "T1179",
      "T1181",
      "T1182",
      "T1183",
      "T1206",
      "T1502",
      "T1504",
      "T1514",
      "T1519"
    ]
  },
  {
    "tactic": "Lateral Movement",
    "id": [
      "T1017",
      "T1021",
      "T1028",
      "T1037",
      "T1051",
      "T1072",
      "T1075",
      "T1076",
      "T1077",
      "T1080",
      "T1091",
      "T1097",
      "T1105",
      "T1155",
      "T1175",
      "T1184",
      "T1210",
      "T1506",
      "T1527",
      "T1534"
    ]
  },
  {
    "tactic": "Execution",
    "id": [
      "T1028",
      "T1035",
      "T1047",
      "T1053",
      "T1059",
      "T1061",
      "T1064",
      "T1072",
      "T1085",
      "T1086",
      "T1106",
      "T1117",
      "T1118",
      "T1121",
      "T1127",
      "T1129",
      "T1151",
      "T1152",
      "T1153",
      "T1154",
      "T1155",
      "T1168",
      "T1170",
      "T1173",
      "T1175",
      "T1177",
      "T1191",
      "T1196",
      "T1203",
      "T1204",
      "T1216",
      "T1218",
      "T1220",
      "T1223"
    ]
  },
  {
    "tactic": "Initial Access",
    "id": [
      "T1078",
      "T1091",
      "T1133",
      "T1189",
      "T1190",
      "T1192",
      "T1193",
      "T1194",
      "T1195",
      "T1199",
      "T1200"
    ]
  },
  {
    "tactic": "Impact",
    "id": [
      "T1485",
      "T1486",
      "T1487",
      "T1488",
      "T1489",
      "T1490",
      "T1491",
      "T1492",
      "T1493",
      "T1494",
      "T1495",
      "T1496",
      "T1498",
      "T1499",
      "T1529",
      "T1531"
    ]
  }
]
