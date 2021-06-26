
        var Patient = function(item){
            var self = this;
            self.id = item.id;
            self.editing = ko.observable(false);
            self.backupCopy = item;

            self.firstName = ko.observable();
            self.lastName = ko.observable();
            self.city = ko.observable();
            self.eyewear = ko.observableArray();

            self.initialize = function(item){
                self.firstName(item.first_name);
                self.lastName(item.last_name);
                self.city(item.city);
                self.eyewear.removeAll();
                $.map(item.eyewear, function(eyes){
                    self.eyewear.push(eyes.Product);
                });
            }
            self.initialize(item);

            self.cancel = function(){
                self.initialize(self.backupCopy);
                self.editing(false);
            }
            self.save = function(){
                self.backupCopy.firstName = self.firstName();
                self.backupCopy.lastName = self.lastName();
                self.backupCopy.city = self.city();
                self.editing(false);
            }

            self.fullName = ko.computed(function(){
                return self.firstName() +" "+ self.lastName();
            });
        }