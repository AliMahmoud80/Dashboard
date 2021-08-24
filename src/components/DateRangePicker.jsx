import { DatePicker } from "antd";
import "antd/dist/antd.css";
import "../styles/DateRangePicker.css";

const DateRangePicker = () => {
  const { RangePicker } = DatePicker;
  return (
    <>
      <RangePicker
        className="date-range-picker"
        style={{ width: "100%", height: "100%" }}
        separator={<>-</>}
      />
    </>
  );
};

export default DateRangePicker;
