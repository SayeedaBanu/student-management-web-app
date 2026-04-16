rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    function isAdmin() {
      return request.auth.token.email in [
        "1stAdminId@gmail.com",
        "2ndAdminID@gmail.com",
        "3rdAdminId@gmail.com"
      ];
    }

    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    match /students/{id} {
      allow read: if request.auth != null;
      allow write: if isAdmin();
    }

    match /{collection}/{doc} {
      allow read, write: if isAdmin();
    }
  }
}
