import Foundation

var studentName: [String] = [
    "นายกรวิชญ์ ไชยวิสุทธิกุล",
    "นายชุติพงศ์ จาจาษิกาญจน์ญาดา",
    "นายณภัทร ประทีปสว่างวงศ์",
    "นายธนพงษ์ แย้มกมล",
    "นายธัญพิสิษฐ์ ลิมปกานนท์",
    "นางสาวนันท์นภัส สุภัคดำรงกุล",
    "นายปพนศักดิ์ เต็มศิริศักดิ์",
    "นางสาวพรชนก เพชรชาติ",
    "นางสาวพรรัต สินในเมือง",
    "นางสาววรินทิรา เพียวประเสริฐ",
    "นางสาววาสิตา มาวัชชกิจ",
    "นายชโยดม สึชิยะ",
    "นายณัฏฐ์ จ.จิตต์เจริญชัย",
    "นางสาวธมนวรรณ วัฒนาวงศ์เสถียร",
    "นางสาวนวพร บุญเยาวลักษณ์",
    "นางสาวปณชญา วรจิตรโกศล",
    "นายพัณธกร ฉิมน้อย",
    "นางสาวพิมพ์วลัญช์ ทรัพย์ไพศาล",
    "นางสาวเมธวิน กลิ่นขจร",
    "นางสาวภคมน ภาณุศานต์",
    "นายภูริพัฒน์ ศิรินู",
    "นายวรพล อารยะกิตติพงศ์",
    "นายสิรธีร์ ธรรมนิต",
    "นางสาวกชกร วัฒนลักขี",
    "นางสาวกรชนก จันทร",
    "นายกานต์ สังขนันท์",
    "นางสาวจันทรรัตน์ ขวัญนาค",
    "นางสาวชนัญชิดา กุลธอุทัย",
    "นางสาวชาลิสา แก้วพิชัย",
    "นางสาวญาณิศา อ่อนแสง",
    "นางสาวณัฐชยา ศรีพยุงฉันท์",
    "นายธนวิทย์ เสาวมล",
    "นางสาวธนัชญา เดชรัตนสุนทร",
    "นายธรธัญญ์ จันทร์ครุธ",
    "นายธีธัช ธัญญาวินิชกุล",
    "นายธีรพัฒน์ กวนพฤกษ์",
    "นายธีร์วรา บัวจูม",
    "นางสาวนันทินี วอทอง",
    "นายปภาเดช วิชชาพิณ",
    "นางสาวพรรษพร พงษ์จีน",
    "นายภวัฒน์กุล โชคอนันต์นิธิ",
    "นายภาณุพงศ์ โฉมฉิน",
    "นายภูวิศ โกมุทมาศ",
    "นางสาวใยรักษ์ อุซึโนะมิยะ",
    "นายรัชพล แซ่โกว",
    "นายวรากร ละปะชัย",
    "นางสาววิริยา เทพบางจาก",
    "นางสาวศศิกานต์ อินทร์นวล",
    "นายสัณห์ ทัศเศรษฐ",
    "นางสาวอรนลิน ธรรมศิรารักษ์",
    "นายฮาซีฟ สลิกา",
    "พี่ปัง"
]

var paired: [Bool] = Array(repeating: false, count: studentName.count)
var buddyName: [String] = Array(repeating: "", count: studentName.count)

func randomFindBuddy(index: Int) -> (String,Int) {
    var randomIndex: Int
    
    if paired[index] == true {
        return (buddyName[index] , index)
    }
    
    else {
        repeat {
            randomIndex = Int.random(in: 0..<studentName.count)
        } while randomIndex == index || paired[randomIndex] == true
        
        buddyName[index] = studentName[randomIndex]
        buddyName[randomIndex] = studentName[index]
        
        paired[index] = true
        paired[randomIndex] = true
        
        return (studentName[randomIndex] , randomIndex)
    }
}

print("--------- โปรแกรมจับคู่นักเรียน ----------")
for i in 0..<studentName.count {
    var pairWith = 0
    randomFindBuddy(index: i)
    for j in 0..<studentName.count {
        if studentName[i] == buddyName[j] {
            pairWith = j+1
        }
    }
    print("คนที่ \(i+1) : \(studentName[i]) pair with คนที่ \(pairWith) : \(buddyName[i]) starus : \(paired[i])")
}
