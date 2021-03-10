import Fade from "react-reveal/Fade";
import { InputFile, InputText } from "components/Form";
import logoBCA from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

const Payment = ({ data, itemDetails, checkout, handleChange }) => {
  const tax = 10;
  const subTotal = itemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
          <Fade delay={300}>
            <p className="mb-4">Transfer Pembayaran:</p>
            <p>Tax: {tax}%</p>
            <p>Sub total: {subTotal}</p>
            <p>Total: Rp. {grandTotal}</p>

            <div className="row mt-4">
              <div className="col-3 text-right">
                <img src={logoBCA} alt="BCA" width="60" />
              </div>
              <div className="col">
                <dl>
                  <dd>Bank Central Asia</dd>
                  <dd>2243 123</dd>
                  <dd>PT. Karya Indonesia</dd>
                </dl>
              </div>
            </div>

            <div className="row">
              <div className="col-3 text-right">
                <img src={logoMandiri} alt="bank-mandiri" width="60" />
              </div>
              <div className="col">
                <dl>
                  <dd>Bank Mandiri</dd>
                  <dd>2243 1345</dd>
                  <dd>PT. Karya Indonesia</dd>
                </dl>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
          <Fade delay={600}>
            <label htmlFor="proofPayment">Upload Bukti Transfer</label>
            <InputFile
              id="proofPayment"
              accept="image/*"
              name="proofPayment"
              value={data.proofPayment}
              onChange={handleChange}
            />

            <label htmlFor="bankName">Asal Bank</label>
            <InputText
              id="bankName"
              name="bankName"
              type="text"
              value={data.bankName}
              onChange={handleChange}
            />

            <label htmlFor="bankHolder">Nama Pengirim</label>
            <InputText
              id="bankHolder"
              name="bankHolder"
              type="text"
              value={data.bankHolder}
              onChange={handleChange}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Payment;
