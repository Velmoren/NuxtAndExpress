<template>
  <div>
    <modal-logout/>
    <modal-pdf/>
    <modal-orders-details/>
    <modal-shipments-details/>
    <modal-payment-link/>
    <phone-modal/>
    <image-static-modal/>
<!--    <modal-image-good/>-->
<!--    <modal-schema-good/>-->
<!--    <modal-table-good/>-->
  </div>
</template>

<script>
import ModalLogout from "~/components/modals/ModalLogout";
import ModalPdf from "~/components/modals/ModalPDF";
import ModalOrdersDetails from "~/components/modals/ModalOrdersDetails";
import ModalShipmentsDetails from "~/components/modals/ModalShipmentsDetails";
import ModalPaymentLink from "~/components/modals/ModalPaymentLink";
import PhoneModal from "~/components/modals/PhoneModal";
import ImageStaticModal from "~/components/modals/ImageStaticModal";
import ModalImageGood from "./ModalImageGood";
import ModalSchemaGood from "./ModalSchemaGood";
import ModalTableGood from "./ModalTableGood";

export default {
components: {
  ModalTableGood,
  ModalSchemaGood,
  ModalImageGood,
  ModalLogout, ModalPdf, ModalOrdersDetails, ModalShipmentsDetails, ModalPaymentLink, PhoneModal, ImageStaticModal}
}
</script>

<style scoped>

</style>
