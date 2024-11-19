function generateChatInterface() {
    // Tạo container chính
    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';

    // Tạo nút chat bubble
    const chatBubble = document.createElement('div');
    chatBubble.className = 'chat-bubble';
    chatBubble.id = 'chatBubble';
    chatBubble.innerHTML = '<i class="fas fa-comments"></i>';

    // Tạo giao diện chat panel
    const chatPanel = document.createElement('div');
    chatPanel.className = 'chat-panel';
    chatPanel.id = 'chatPanel';

    // Tạo nội dung của chat panel
    chatPanel.innerHTML = `
        <div class="d-flex">
            <div class="sidebar-panel" id="sidebarPanel">
                <div class="sidebar-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Chat History</h5>
                    <button class="btn btn-primary rounded-circle" id="startNewChat">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <ul class="list-group list-group-flush chat-history">
                    <li class="list-group-item active">
                        <div class="d-flex align-items-center">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d" alt="User" class="rounded-circle me-2" width="40" height="40">
                            <div>
                                <h6 class="mb-0">John Doe</h6>
                                <small>Latest message: Hello! How are you?</small>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex align-items-center">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="User" class="rounded-circle me-2" width="40" height="40">
                            <div>
                                <h6 class="mb-0">Sarah Smith</h6>
                                <small>Latest message: See you tomorrow!</small>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex align-items-center">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" alt="User" class="rounded-circle me-2" width="40" height="40">
                            <div>
                                <h6 class="mb-0">Mike Johnson</h6>
                                <small>Latest message: Thanks for your help!</small>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="card shadow-sm flex-grow-1">
                <div class="card-header bg-white py-3">
                    <div class="d-flex align-items-center justify-content-between">
                        <button class="btn btn-link text-dark p-0 me-2 mobile-menu" id="toggleSidebar">
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="d-flex align-items-center">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d" alt="User Avatar" class="rounded-circle" width="50" height="50">
                            <div class="ms-3">
                                <h6 class="mb-0">John Doe</h6>
                                <small class="text-success">Online</small>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-link text-dark me-2" id="toggleExpand"><i class="fas fa-expand"></i></button>
                            <button type="button" class="btn-close" id="closeChat"></button>
                        </div>
                    </div>
                </div>
                <div class="card-body chat-body" style="height: 400px; overflow-y: auto;">
                    <div class="message-container">
                        <div class="d-flex mb-4 received">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d" alt="Sender" width="30" height="30" class="rounded-circle">
                            <div class="ms-2">
                                <div class="bg-light rounded py-2 px-3">
                                    <p class="mb-0">Hello! How are you?</p>
                                </div>
                                <small class="text-muted">10:12 AM <i class="fas fa-check-double text-primary ms-1"></i></small>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mb-4 sent">
                            <div class="me-2 text-end">
                                <div class="bg-primary rounded py-2 px-3">
                                    <p class="mb-0 text-white">Hi! I'm doing great, thanks!</p>
                                </div>
                                <small class="text-muted">10:15 AM <i class="fas fa-check-double text-primary ms-1"></i></small>
                            </div>
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Receiver" width="30" height="30" class="rounded-circle">
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-white">
                    <div class="input-group">
                        <input type="text" class="form-control border-0" placeholder="Type your message..." aria-label="Type your message">
                        <button class="btn btn-primary" type="button">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;

    // Gắn tất cả các phần tử vào container chính
    chatContainer.appendChild(chatBubble);
    chatContainer.appendChild(chatPanel);

    // Thêm container chính vào body
    document.body.appendChild(chatContainer);

    // Thêm các sự kiện cho chat bubble
    document.getElementById("chatBubble").addEventListener("click", toggleChat);
    document.getElementById("startNewChat").addEventListener("click", startNewChat);
    document.getElementById("toggleSidebar").addEventListener("click", toggleSidebar);
    document.getElementById("toggleExpand").addEventListener("click", toggleExpand);
    document.getElementById("closeChat").addEventListener("click", toggleChat);


    document.addEventListener("click", function (event) {
        const sidebarPanel = document.getElementById("sidebarPanel");
        const mobileMenu = document.querySelector(".mobile-menu");
        if (!sidebarPanel.contains(event.target) && !mobileMenu.contains(event.target)) {
            sidebarPanel.classList.remove("show-mobile");
        }
    });

    // Thêm logic chức năng
     function toggleChat() {
        chatPanel.classList.toggle("show");
        chatBubble.style.display = chatPanel.classList.contains("show") ? "none" : "flex";
    }

     function toggleExpand() {
        chatPanel.classList.toggle("expanded");
        document.querySelector(".mobile-menu").style.display = chatPanel.classList.contains("expanded") ? "none" : "block";
    }

     function toggleSidebar() {
        const sidebarPanel = document.getElementById("sidebarPanel");
        sidebarPanel.classList.toggle("show-mobile");
    }

     function startNewChat() {
        alert("Starting new chat...");
    }
}
