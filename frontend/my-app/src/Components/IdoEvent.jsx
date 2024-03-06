import React from "react";

const IdoEvent = () => {
  return (
    <div>
      <div>
        <div>
          <h3>Participate in our IDO Event!</h3>
          <div>
            <div>
              <p>
                During our IDO event, you will gain early access to our
                revolutionary ecosystem, designed to empower everyone to share
                wealth and achieve success.
              </p>
              <div>
                <div>
                  <p>Token Info</p>
                </div>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>Total Token Supply</td>
                        <td>20%</td>
                      </tr>
                      <tr>
                        <td>Soft Cap</td>
                        <td>200 BNB</td>
                      </tr>
                      <tr>
                        <td>Initial exchange rate</td>
                        <td>1 BNB</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>Recommended Referral Commission</p>
                  <table>
                    <tbody>
                      <tr>
                        <td>1st Generation</td>
                        <td>5%</td>
                      </tr>

                      <tr>
                        <td>2nd Generation</td>
                        <td>2%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* wallet connect  */}

              <p className="">Become an affiliate & Earn 7% as Commission!</p>
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="Generate a unique referral link"
                  />
                  <button>Generate</button>
                </div>
                <div className="cursor-pointer">
                  <img
                    src={""}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <p>0</p>
                    </div>
                    <div>
                      <p>0</p>
                    </div>
                  </div>
                  <div>
                    <span>:</span>
                  </div>
                  <div>
                    <div>
                      <p>0</p>
                    </div>
                    <div>
                      <p>0</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p>PRESALE 1</p>
                  <p>1 Saviour = 0.657 USDT</p>
                  <p>Next Stage Price = 0.723 USDT</p>
                  <p>Sold - $34,56,56,764/$50,00,00,000</p>
                  <p>Raised - $34,56,56,764/$40,00,00,000</p>
                  <div>
                    <input type="text" placeholder="Enter the amount (BNB)" />
                    <input type="text" placeholder="Minimum Quantity to Buy" />
                    <input
                      type="text"
                      placeholder="Maximum Quantity of Tokens"
                    />
                  </div>
                  <div>
                    <button>Buy</button>
                    <button>Claim Drop</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdoEvent;
