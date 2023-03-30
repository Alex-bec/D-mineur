def terrain(): #Affiche la grille
  fill_rect(8,21,300,200,c[9])
  for y in range(21,243,20):
    for x in range(8,309):
      set_pixel(x,y,c[10])
  for x in range(8,320,20):
    for y in range(21,222):
      set_pixel(x,y,c[10])
      
#codage des couleurs
co=color
f,h,n = 255,127,0
c=[co(f,f,f), co(45,125,210), co(151,204,4), co(238,185,2), co(244,93,1), co(215,65,167), co(n,n,n), co(n,n,n), co(n,n,n),
   co(h,h,h),co(192,192,192),co(96,96,96),co(253,236,185)]     
   
def cl(x,y):
  fill_rect(9+20*x,22+20*y,19,19,c[0])
 
def drapeau(x,y):
  fill_rect(17+20*x,26+20*y,3,9,c[12])
  fill_rect(17+20*x,36+20*y,3,3,c[12])
 
def mine(x,y): # Ce code ne sera pas retenu pour la version finale.
  cl(x,y);
  fill_rect(12+20*x,36+20*y,13,4,c[9])
  fill_rect(14+20*x,34+20*y,9,2,c[11])
  fill_rect(17+20*x,32+20*y,3,2,c[5])  
