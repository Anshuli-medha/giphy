import { useEffect, useState } from "react";
import { getGiphies } from "../../utils/apis";

function Giphy() {
    let [data, setData] = useState('');
    useEffect(() => {
        const defaultLimit = 20;
        async function fetchData() {
            if (!data) {
                const response = await getGiphies(defaultLimit);
                setData(response?.data);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="giphy_header pt-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="giphy-content p-relative">
                            <div className="p-absolute">
                                <div className="giphy_searchbar">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="basic-addon2">Search</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="giphy_search_result d-flex flex-wrap">
                                    {data && data.map((eachData, index) => {
                                        return <img className="w-10 h-10 image-section" key={`${index}_${eachData.id} `} src={eachData?.user?.avatar_url} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Giphy;