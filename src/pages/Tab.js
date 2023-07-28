import { useState } from "react";

const Tab = () => {

    const data = [
        { id: 1, title: "tab01", content: "1번" },
        { id: 2, title: "tab02", content: "2번" },
        { id: 3, title: "tab03", content: "3번" }
    ];

    const [num, setNum] = useState(0);
    return (
        <div className="Tab">
            <ul className="tabMenu">
                {
                    // map=순회하셈. map은 함수()=>를 받아야함
                    data.map((it, idx) => {
                        return (
                            <li onClick={() => setNum(idx)}>{it.title}</li>
                        )
                    })

                }
            </ul>
            <div className="tabContent">
                {
                    data[num].content
                }
            </div>
        </div>
    )

}

export default Tab;