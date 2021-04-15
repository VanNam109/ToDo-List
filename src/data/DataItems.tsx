import { v4 as uuidv4 } from "uuid";
const dataItems = [
  {
    id: uuidv4(),
    name: "Giải ngọai hạng",
    level: 2, // high
  },
  {
    id: uuidv4(),
    name: "Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018",
    level: 0, // low
  },
  {
    id: uuidv4(),
    name: "Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo",
    level: 1, // medium
  },
  {
    id: uuidv4(),
    name: "Gần 200 người chết vì tai nạn giao thông 7 ngày nghỉ Tết",
    level: 0, // low
  },
  {
    id: uuidv4(),
    name: "VFF giải ngân 15 tỷ đồng, tiền thưởng tới tay U23 VN trước Tết",
    level: 2, // high
  },
  {
    id: uuidv4(),
    name: "F1 muốn tổ chức giải đua xe tại Việt Nam vào năm 2020",
    level: 1, // medium
  },
];

export default dataItems;
