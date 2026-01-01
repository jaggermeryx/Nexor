**📄 README.md**

```markdown
# Nexor - Connect. Share. Engage. 🚀

A modern social platform built as a Telegram Mini App with real-time features, community engagement, and Firebase backend.

![Nexor](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-Proprietary-red)
![Firebase](https://img.shields.io/badge/Firebase-Enabled-orange)

---

## 🌟 Features

- ✅ **Real-time Posts** - Create threads, discussions, and admin announcements
- ✅ **Comments System** - Engage with posts through comments
- ✅ **Like System** - Express appreciation for content
- ✅ **Follow System** - Build your community network
- ✅ **User Profiles** - View user stats and activity
- ✅ **Admin Controls** - Special privileges for moderators
- ✅ **Premium Posts** - Exclusive content for premium members
- ✅ **Telegram Integration** - Seamless authentication via Telegram
- ✅ **Firebase Backend** - Cloud-based, scalable infrastructure

---

## 👥 Credits

This project was developed and maintained by:

- **[wlzbi](https://t.me/scuzzier)** - Lead Developer & Architecture
- **[rishav](https://t.me/@sirrishav)** - Frontend Development & UI/UX
- **[syn4ck](https://t.me/zipsdown)** - Backend Integration & Firebase Setup

**Special Thanks:**
- **[MethodSwap Telegram Channel](https://t.me/methodswap)** - For community support and inspiration

---

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Backend:** Firebase (Firestore + Authentication)
- **Hosting:** Vercel
- **Integration:** Telegram Mini Apps API
- **Styling:** Inline CSS (optimized for mobile)

---

## 📦 Installation

### Prerequisites
- Node.js 18+
- Firebase Account
- Telegram Bot Token

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/nexor.git
cd nexor
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Firebase**

Create `src/firebase.js` and add your Firebase config:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

4. **Run development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click
4. Connect to Telegram Bot via @BotFather

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting
```

---

## 🔐 Firebase Setup

1. Create Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Firestore Database (Test Mode)
3. Enable Authentication (Anonymous)
4. Copy config to `src/firebase.js`

---

## 📱 Telegram Bot Setup

1. Message [@BotFather](https://t.me/BotFather)
2. Create bot: `/newbot`
3. Create Mini App: `/newapp`
4. Set Web App URL to your Vercel deployment
5. Launch app in Telegram!

---

## 📄 License

**PROPRIETARY LICENSE - ALL RIGHTS RESERVED**

Copyright © 2025 wlzbi, rishav, syn4ck, and MethodSwap

This software and associated documentation files (the "Software") are proprietary and confidential. 

**RESTRICTIONS:**
- ❌ You may NOT use, copy, modify, merge, publish, distribute, sublicense, or sell copies of the Software
- ❌ You may NOT reverse engineer, decompile, or disassemble the Software
- ❌ You may NOT create derivative works based on the Software
- ❌ You may NOT remove or alter any proprietary notices or labels on the Software

**PERMITTED USE:**
- ✅ Viewing the source code for educational purposes only
- ✅ Running the Software for personal evaluation only

Any unauthorized use, reproduction, or distribution of this Software is strictly prohibited and may result in severe civil and criminal penalties.

For licensing inquiries, contact: [compression@live.ca.com]

---

## ⚠️ Disclaimer

This software is provided "AS IS" without warranty of any kind, express or implied. The authors shall not be liable for any damages arising from the use of this software.

---

## 🤝 Contributing

This is a closed-source project. Contributions are not accepted at this time.

---

## 📞 Support

For official support and updates:
- 📢 Telegram Channel: [@methodswap](https://t.me/methodswap)
- 📧 Email: compression@live.ca.com

---

## 🎯 Roadmap

- [ ] File sharing system
- [ ] Voice messages
- [ ] Group chats
- [ ] Notifications
- [ ] Advanced analytics
- [ ] Mobile app (iOS/Android)

---

**Built with ❤️ by wlzbi, rishav, syn4ck | Powered by MethodSwap Community**

© 2025 Nexor. All rights reserved.
```

---

**📜 LICENSE**

Create a file called `LICENSE`:

```
PROPRIETARY SOFTWARE LICENSE AGREEMENT

Copyright (c) 2025 wlzbi, rishav, syn4ck, and MethodSwap Community
All Rights Reserved.

IMPORTANT - READ CAREFULLY: This License Agreement ("Agreement") is a legal 
agreement between you (either an individual or a single entity) and the 
copyright holders listed above for the software product identified above, 
which includes computer software and may include associated media, printed 
materials, and "online" or electronic documentation ("SOFTWARE PRODUCT").

By accessing, downloading, copying, installing, or otherwise using the 
SOFTWARE PRODUCT, you agree to be bound by the terms of this Agreement. 
If you do not agree to the terms of this Agreement, do not install, 
copy, or use the SOFTWARE PRODUCT.

1. GRANT OF LICENSE
   This Agreement does NOT grant you any rights to use the SOFTWARE PRODUCT. 
   The SOFTWARE PRODUCT is licensed, not sold. All rights not expressly 
   granted are reserved by the copyright holders.

2. RESTRICTIONS
   You may NOT:
   a) Use the SOFTWARE PRODUCT for any commercial or non-commercial purpose
   b) Copy, reproduce, distribute, or create derivative works
   c) Reverse engineer, decompile, or disassemble the SOFTWARE PRODUCT
   d) Rent, lease, lend, sell, redistribute, or sublicense the SOFTWARE PRODUCT
   e) Remove any proprietary notices or labels on the SOFTWARE PRODUCT
   f) Use the SOFTWARE PRODUCT in any manner that violates applicable law
   g) Transfer your rights under this Agreement to any third party
   h) Host, deploy, or make available the SOFTWARE PRODUCT to third parties

3. OWNERSHIP
   The SOFTWARE PRODUCT is owned by wlzbi, rishav, snack, and MethodSwap 
   Community and is protected by copyright laws and international treaty 
   provisions. You acknowledge that no title to the intellectual property 
   in the SOFTWARE PRODUCT is transferred to you.

4. PERMITTED USES
   You may only:
   a) View the source code for educational and reference purposes
   b) Run the SOFTWARE PRODUCT locally for personal evaluation

5. TERMINATION
   This Agreement is effective until terminated. Your rights will terminate 
   automatically without notice if you fail to comply with any term. Upon 
   termination, you must destroy all copies of the SOFTWARE PRODUCT.

6. DISCLAIMER OF WARRANTY
   THE SOFTWARE PRODUCT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. 
   THE COPYRIGHT HOLDERS DISCLAIM ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, 
   INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND 
   FITNESS FOR A PARTICULAR PURPOSE.

7. LIMITATION OF LIABILITY
   IN NO EVENT SHALL THE COPYRIGHT HOLDERS BE LIABLE FOR ANY DAMAGES 
   WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS 
   PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, OR OTHER 
   PECUNIARY LOSS) ARISING OUT OF THE USE OR INABILITY TO USE THIS SOFTWARE 
   PRODUCT.

8. ENFORCEMENT
   Any violation of this Agreement will result in immediate termination of 
   your license and may result in legal action. Monetary damages may not be 
   a sufficient remedy for unauthorized use. Accordingly, you agree that the 
   copyright holders shall be entitled to seek equitable relief, including 
   injunction and preliminary injunction, in addition to all other remedies.

9. GOVERNING LAW
   This Agreement shall be governed by and construed in accordance with 
   applicable international copyright laws and treaties.

10. ENTIRE AGREEMENT
    This Agreement constitutes the entire agreement between you and the 
    copyright holders regarding the SOFTWARE PRODUCT and supersedes all 
    prior agreements and understandings.

FOR LICENSING INQUIRIES:
Contact: compression@live.ca.com (placeholder)

BY USING THIS SOFTWARE, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS AGREEMENT, 
UNDERSTAND IT, AND AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS.

---
wlzbi, rishav, syn4ck
MethodSwap Community
2025
```

---

