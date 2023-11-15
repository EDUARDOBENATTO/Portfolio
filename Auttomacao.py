from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.get("https://google.com")

caixa_pesquisa = driver.find_element("id", "APjFqb")
caixa_pesquisa.send_keys("euro hoje")
                                
caixa_pesquisa.send_keys(Keys.RETURN)      

imput()
driver.quit()

