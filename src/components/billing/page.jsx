import BillingInformationForm from "./BillingInformationForm";
import Breadcrumb from "./Breadcrumb";;

const Checkout = () => {
  return (
    <>
      <Breadcrumb title="Checkout" subtitle="Order" />
      <section className="py-6 lg:py-10">
        <div className="container">
          <BillingInformationForm />
        </div>
      </section>
    </>
  );
};

export default Checkout;
